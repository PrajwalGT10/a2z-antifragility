import { test, expect } from '@playwright/test';

// Define how many test submissions Ralph should perform
const LOOP_COUNT = 1;

test('Execute the Ralph Loop', async ({ page }) => {
    test.setTimeout(1200000); // Allow lots of time for testing many submissions

    for (let cycle = 1; cycle <= LOOP_COUNT; cycle++) {
        console.log(`🚀 Starting Ralph Submission #${cycle}`);
        // Go to the local app
        await page.goto('http://localhost:5173');

        // Continuously step forward until we hit the finish screen
        while (true) {
            // 1. Are we at the final screen?
            if (await page.locator('text=Assessment Complete!').isVisible()) {
                console.log(`✅ Ralph finished submission #${cycle}!`);

                // WAIT for the AI Processing Overlay to disappear if it exists
                const aiOverlay = page.locator('.processing-overlay');
                if (await aiOverlay.isVisible()) {
                    console.log('🤖 Ralph is waiting for the AI Brain to finish...');
                    await aiOverlay.waitFor({ state: 'hidden', timeout: 30000 });
                }

                // Finally, click the new Premium Download button
                const downloadBtn = page.locator('button:has-text("Download NLP Coaching Report")');
                if (await downloadBtn.isVisible()) {
                    console.log('📥 Ralph is initiating the PDF download...');
                    const [download] = await Promise.all([
                        page.waitForEvent('download').catch(() => null),
                        downloadBtn.click()
                    ]);
                    if (download) {
                        console.log(`✅ Report downloaded for session ${cycle}`);
                    }
                }

                break;
            }
/* ... rest of loop logic remains same ... */
            // 2. Are we at the User Details screen?
            if (await page.locator('input[name="firstName"]').isVisible()) {
                await page.fill('input[name="firstName"]', `RalphBot_${cycle}`);
                await page.fill('input[name="lastName"]', 'Automated');
                await page.fill('input[name="email"]', `ralph${cycle}@example.com`);
                await page.click('button.btn:has-text("Continue")');
            }
            // 3. We are on a Sorting Phase (Categories or Behaviors)
            else if (await page.locator('.pill-button').first().isVisible()) {
                await page.waitForTimeout(600);
                const confirmBtn = page.locator('button.btn:has-text("Confirm & Continue")');
                while (await confirmBtn.isDisabled()) {
                    const availablePills = await page.locator('.pill-button:visible:not(.disabled):not(.selected)').all();
                    if (availablePills.length > 0) {
                        const randomPill = availablePills[Math.floor(Math.random() * availablePills.length)];
                        await randomPill.click();
                        await page.waitForTimeout(100);
                    } else { break; }
                }
                if (await confirmBtn.isEnabled()) {
                    await confirmBtn.click();
                }
            }
            await page.waitForTimeout(400);
        }
    }

    // Keep the browser open so you can inspect the final result!
    console.log('🏁 Ralph has finished. Keeping browser open for inspection...');
    await page.pause(); 
});

