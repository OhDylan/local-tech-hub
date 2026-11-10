// Render plan.html to ../phase1-plan.pdf with the preinstalled Playwright Chromium.
// Usage: node build_pdf.js
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(__dirname, 'plan.html'), { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.resolve(__dirname, '..', 'phase1-plan.pdf'),
    format: 'A4', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: '<div style="font-size:7px;width:100%;text-align:center;color:#888;font-family:Inter,sans-serif">Home AI Agent: Phase 1 Plan · page <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
  });
  await browser.close();
})();
