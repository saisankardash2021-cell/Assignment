import {test, expect} from '@playwright/test';

test("Verify the page title",async({page})=>{

await page.goto("https://www.google.com");

let testTitle:string = await page.title();
console.log("Title:",testTitle);

await expect(page).toHaveTitle("Google")
})


