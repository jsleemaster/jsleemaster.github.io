const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    let browser;
    try {
        const macChromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
        const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH
            || (fs.existsSync(macChromePath) ? macChromePath : undefined);

        browser = await puppeteer.launch({
            headless: true,
            ...(executablePath ? { executablePath } : {}),
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        // Path to your resume HTML file
        const resumePath = path.join(__dirname, '../resume/index.html');
        const pdfPath = path.join(__dirname, '../resume/resume.pdf');

        // Load the local HTML file
        await page.goto(`file://${resumePath}`, {
            waitUntil: 'networkidle2'
        });
        await page.evaluateHandle('document.fonts.ready');

        // Generate PDF
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true, // prints background colors/images
            displayHeaderFooter: false,
            margin: {
                top: '10mm',
                right: '15mm',
                bottom: '15mm',
                left: '15mm'
            }
        });

        console.log(`PDF generated successfully at: ${pdfPath}`);
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exitCode = 1;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
