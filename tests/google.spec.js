const { test, expect } = require('@playwright/test');

test('Google title test', async ({ page }) => {

    await page.goto('https://www.google.com');

    console.log(await page.title());

    await expect(page).toHaveTitle(/Google/);
});