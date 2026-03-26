
import {test, expect} from '@playwright/test';

test("Verify the page title",async({page})=>{

await page.goto("https://www.google.com");

let testURL:string = page.url();
console.log("Title:",testURL);

await expect(page).toHaveURL(/google/);
})
