const { default: expect } = require('expect');
const puppeteer = require('puppeteer');
 
let browser;
let page;

describe('Example', () => {

    beforeAll(async () => {
        jest.setTimeout(20000); // change timeout to 20 seconds
        browser = await puppeteer.launch({ headless: false });
        page = await browser.newPage();
        //Visiting the Plaid-Pattern Website
        await page.goto('https://pattern.plaid.com/');
  
}, 20000 );
 
 
  it('Wait', async () => {
    expect(await page.title()).toBe('Plaid Pattern');
});


    it('Adding the User ', async () => {
    // Click the button
    await page.click('[type="button"]');
    // Wait for the button to be clicked to Create a User
    await page.waitForSelector('[type="button"]');
    // Find the element containing the text using a selector
    const element = await page.$('h3');
    // Extract the text from the element using evaluate()
    const text = await element.evaluate(node => node.innerText);
    // Verify that button is clicked or not by looking at the text
    expect(text).toContain('ADD A NEW USER');
    });


    it('Wait  ', async () => { 
      await page.waitForTimeout(10000)
    });

   
    it('Creating New User SALEH ', async () => {
        // Find the input field and type "Saleh"
        await page.type('#username', 'Saleh');
        // Click on the submit button
        await page.click('[type="submit"]');
          });  


      it('Adding the Bank', async () => {
        // Click on the submit button
        await page.click('[role="button"]');
      });


      it('Wait-', async () => { 
      await page.waitForTimeout(10000)
    });


      it('Creating the User', async () => {
        await page.waitForSelector('#plaid-link-iframe-1');
        // Find the iframe element
        const iframeElement = await page.$("#plaid-link-iframe-1");
        // Navigate to the iframe's content
        const iframeContent = await iframeElement.contentFrame();

        //verifying that either frameContent is extracted or not by the text
 const expectedText = 'Plaid lets you securely connect your financial accounts in seconds';
        const actualText = await iframeContent.$eval('p', (el) => el.textContent);
        expect(actualText).toEqual(expectedText); 
        
    });

    it('Adding the Bank', async () => {
        await page.waitForSelector('#plaid-link-iframe-1');
         const iframeElement = await page.$("#plaid-link-iframe-1");
        // Navigate to the iframe's content   
        const iframeContent = await iframeElement.contentFrame();
        await iframeContent.click('#aut-button');

});

it('Adding the Wait', async () => { 
    await page.waitForTimeout(10000)
  });


it('Adding-the-Bank', async () => {
    await page.waitForSelector('#plaid-link-iframe-1');
    const iframeElement = await page.$("#plaid-link-iframe-1");
    const iframeContent = await iframeElement.contentFrame();
    await iframeContent.click('#aut-ins_13');
});  
  
it('Adding Wait', async () => { 
  await page.waitForTimeout(10000)
});

it('Adding the Bank with Valid User Name', async () => {
  await page.waitForSelector('#plaid-link-iframe-1');
  const iframeElement = await page.$("#plaid-link-iframe-1");
  const iframeContent = await iframeElement.contentFrame();
  // Find the input field and type "user_good"
  await iframeContent.type('#aut-input-0', 'user_good');
  });


  it('Adding the Bank with Valid Password', async () => {
    await page.waitForSelector('#plaid-link-iframe-1');
    const iframeElement = await page.$("#plaid-link-iframe-1");
    const iframeContent = await iframeElement.contentFrame();
    // Find the input field and type "pass_good"
    await iframeContent.type('#aut-input-1', 'pass_good');
    });

    it('Adding the Bank after giving Valid Credentials', async () => {
      await page.waitForSelector('#plaid-link-iframe-1');
      const iframeElement = await page.$("#plaid-link-iframe-1");
      const iframeContent = await iframeElement.contentFrame();
      await iframeContent.click('#aut-button');
    });

  it('Add Wait', async () => { 
    await page.waitForTimeout(10000)
  });

  it('Selecting Accounts', async () => {
    await page.waitForSelector('#plaid-link-iframe-1');
      const iframeElement = await page.$("#plaid-link-iframe-1");
      const iframeContent = await iframeElement.contentFrame();
    const checkbox = await iframeContent.$('#userSelectionSelectAllToggle');
    await checkbox.click();
  });

  it('Basnk', async () => { 
    await page.waitForTimeout(10000)
  });
  
  it('Adding the Banks with all the checkboxes selected', async () => {
    await page.waitForSelector('#plaid-link-iframe-1');
      const iframeElement = await page.$("#plaid-link-iframe-1");
      const iframeContent = await iframeElement.contentFrame();
      await iframeContent.click('#aut-button');
    });


    it('Add A Wait', async () => { 
      await page.waitForTimeout(10000)
    });


    it('Finilizing the Addition of Bank', async () => {
      await page.waitForSelector('#plaid-link-iframe-1');
        const iframeElement = await page.$("#plaid-link-iframe-1");
        const iframeContent = await iframeElement.contentFrame();
        await iframeContent.click('#aut-button');
      

});
   }, 20000);  