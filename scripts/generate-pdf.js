const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        // Path to your resume HTML file
        const resumePath = path.join(__dirname, '../resume/index.html');
        const pdfPath = path.join(__dirname, '../resume/resume.pdf');

        // Load the local HTML file
        await page.goto(`file://${resumePath}`, {
            waitUntil: 'networkidle0'
        });

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

        await browser.close();
    } catch (error) {
        console.error('Error generating PDF:', error);
        process.exit(1);
    }
})();
