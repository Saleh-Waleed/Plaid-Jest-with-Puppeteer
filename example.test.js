const puppeteer = require('puppeteer');
 
  


describe('Example', () => {
  it('should navigate to Google', async () => {
    
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--disable-features=CrossSiteDocumentBlockingIfIsolating'],
      });

    const page = await browser.newPage();

    await page.goto('https://pattern.plaid.com/');
    expect(await page.title()).toBe('Plaid Pattern');


   // it.only('should click the button', async () => {
        // Click the button
        await page.click('[type="button"]');
        // Wait for the button to be clicked
        await page.waitForSelector('[type="button"]');
        // Verify that the button has been clicked
        const buttonClassList = await page.$eval('[type="button"]', el => el.classList);
      expect(buttonClassList.hasClass('clicked')).toBe(true);

    //await browser.close();
 // });
});
});
