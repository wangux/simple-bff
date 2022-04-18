const playwright = require('playwright');

(async () => {
  for (const browserType of ['chromium', 'firefox', 'webkit']) {
    const browser = await playwright[browserType].launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://localhost:3000/books/list');
    await page.screenshot({ path: `example-${browserType}.png` });
    await browser.close();
  }
})();