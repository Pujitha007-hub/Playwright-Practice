import { test, expect } from '@playwright/test';

test('TC003', async ({ page }) => {
    await page.goto('https://www.w3schools.com');
    console.log('W3 Schools opened');

    await page.locator('#subtopnav').getByTitle('HTML Tutorial').click();

    await expect(page).toHaveURL(/html/);
});