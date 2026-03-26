import { test, expect, chromium } from '@playwright/test';

// This test demonstrates various browser actions such as navigation, refreshing, and going back/forward in history.

/*test('Browser action Open and Close the browser',async()=>{

    //luncg the browser engine (chrome engg)

    const browserEngine = await chromium.launch({channel: 'chrome' , headless: false} );

    //lunch context

    const browserContext = await browserEngine.newContext();

    
    // clear the cookies

    await browserContext.clearCookies();

    //lunch new tab

    const page = await browserContext.newPage();


    //browser windows to specific resolution 

    await page.setViewportSize({width:1920, height:1080});

    // clear the cookies

    await browserContext.clearCookies();

    // lunch google.com

    await page.goto('https://www.google.com');

    // compare google is lunched or not

    await expect(page).toHaveTitle('Google');

    // lunch a new apps

    await page.goto('https://playwright.dev');

    // go bac to previous apps

    await page.goBack();

    //forword

    await page.goForward();

    // refresh 

    await page.reload();

    // open new tab in same browser

    const newPage = await browserContext.newPage();

    //https://www.selenium.dev/

    await newPage.goto('https://www.selenium.dev');

    // go back to old site

    await page.bringToFront();

    //copy ur;

    let cureentURL = page.url();
    console.log("cureentURL");

    // close the current tab 

    await page.close();

    // close the browser 

    await browserEngine.close();

});*/

/*test('browser engine open and close', async () => {

    const browserEngg = await chromium.launch({channel:'chrome',headless:false});
    const browserContext = await browserEngg.newContext();
    await browserContext.clearCookies();
    const page = await browserContext.newPage();
    await page.setViewportSize({width:1920,height:1080});
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
    await page.close();
    await browserEngg.close();
})*/

test('testing',async() => {


    const browserEngg = await chromium.launch({channel:'chrome', headless:false});



})


