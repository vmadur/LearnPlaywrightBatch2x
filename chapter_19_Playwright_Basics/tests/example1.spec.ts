import { test, expect } from '@playwright/test'

test("Verify that the title will be TTA Cart", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/ttacart")
    await page.waitForTimeout(5000);
    await expect(page).toHaveTitle("TTACart - Login");

});

// page - inbuilt fixture- is automatically given it to you
// which are the functions you can directly use in playwright.