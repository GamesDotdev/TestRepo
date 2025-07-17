import { test, expect } from '@playwright/test';

test('photorealistic_earth.html should load without console errors', async ({ page }) => {
    let consoleErrors = [];

    // Listen for console messages of type 'error'
    page.on('console', msg => {
        if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
        }
    });

    // Navigate to the HTML file served by http-server
    // Assuming http-server is running on port 8080
    await page.goto('http://localhost:8080/photorealistic_earth.html');

    // Wait for the canvas element to be present, indicating Three.js has likely initialized
    await expect(page.locator('#three-canvas')).toBeVisible();

    // Give some time for potential async errors to appear (e.g., texture loading)
    await page.waitForTimeout(5000); 

    // Assert that no console errors were logged
    expect(consoleErrors).toEqual([]);

    // Optional: Add more assertions here, e.g., check for specific text or elements
    // await expect(page.locator('h1')).toHaveText('3D Earth Simulation');
});
