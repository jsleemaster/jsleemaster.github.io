const fs = require('fs');
const http = require('http');
const https = require('https');
const path = require('path');

const DEFAULT_PATHS = [
  'README.md',
  'resume/index.html',
  'job-templates',
  'wiki/data/content.json',
  'wiki/data/public-graph.json',
  'wiki/data/search-index.json',
];

const URL_PATTERN = /https?:\/\/[^\s<>"')\\]+/g;
const BLOCKED_BUT_ALIVE = new Set([401, 403, 429]);

function collectFiles(target) {
  const stat = fs.statSync(target);

  if (stat.isDirectory()) {
    return fs.readdirSync(target)
      .flatMap((entry) => collectFiles(path.join(target, entry)));
  }

  return [target];
}

function normalizeUrl(rawUrl) {
  return rawUrl
    .replace(/&amp;/g, '&')
    .replace(/[.,;:!?]+$/g, '');
}

function extractUrls(files) {
  const urls = new Set();

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(URL_PATTERN) || [];
    matches.map(normalizeUrl).forEach((url) => urls.add(url));
  }

  return [...urls].sort();
}

function requestUrl(url, method = 'HEAD', redirectCount = 0) {
  return new Promise((resolve) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'http:' ? http : https;
    const req = client.request(parsed, {
      method,
      timeout: 30000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; resume-link-checker/1.0)',
      },
    }, (res) => {
      const status = res.statusCode || 0;
      const location = res.headers.location;

      res.resume();

      if (status >= 300 && status < 400 && location && redirectCount < 5) {
        const nextUrl = new URL(location, parsed).toString();
        resolve(requestUrl(nextUrl, method, redirectCount + 1));
        return;
      }

      if ((status === 405 || status === 501) && method === 'HEAD') {
        resolve(requestUrl(url, 'GET', redirectCount));
        return;
      }

      resolve({ url, status });
    });

    req.on('timeout', () => {
      req.destroy(new Error('timeout'));
    });

    req.on('error', (error) => {
      resolve({ url, error: error.message });
    });

    req.end();
  });
}

function isFailure(result) {
  if (result.error) {
    return true;
  }

  if (BLOCKED_BUT_ALIVE.has(result.status)) {
    return false;
  }

  return result.status >= 400 || result.status < 200;
}

async function main() {
  const targets = process.argv.slice(2);
  const files = (targets.length > 0 ? targets : DEFAULT_PATHS)
    .flatMap((target) => collectFiles(target))
    .filter((file) => /\.(html|md|txt|json)$/i.test(file));

  const urls = extractUrls(files);
  const results = [];

  for (const url of urls) {
    results.push(await requestUrl(url));
  }

  const failures = results.filter(isFailure);

  for (const result of results) {
    const marker = isFailure(result) ? 'FAIL' : 'OK';
    const detail = result.error ? result.error : result.status;
    console.log(`${marker} ${detail} ${result.url}`);
  }

  if (failures.length > 0) {
    console.error(`\n${failures.length} dead or unreachable link(s) found.`);
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
