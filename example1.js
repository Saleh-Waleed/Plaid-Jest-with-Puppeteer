const puppeteer = require('puppeteer');
 
  


describe('Example', () => {
  it('should navigate to Google', async () => {
    
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--disable-features=CrossSiteDocumentBlockingIfIsolating'],
      });

    const page = await browser.newPage();

    await page.goto('https://www.google.com');

    expect(await page.title()).toBe('Google');

    await browser.close();
  });
});
