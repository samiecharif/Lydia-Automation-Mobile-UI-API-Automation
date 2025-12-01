import { $, browser } from "@wdio/globals";

class OnboardingPage {

    get continueBtn() {
        return $('id=org.wikipedia.alpha:id/fragment_onboarding_forward_button');
    }

    get skipBtn() {
        return $('id=org.wikipedia.alpha:id/fragment_onboarding_skip_button');
    }

    /**
     * Handles onboarding for all Wikipedia versions used in Lydia test
     */
    async completeOnboarding() {
        console.log("➡️ Handling onboarding…");

        // Case 1 : Skip button available
        if (await this.skipBtn.isDisplayed().catch(() => false)) {
            await this.skipBtn.click();
            await browser.pause(500);
            return;
        }

        // Case 2 : Continue button available (4 screens max)
        for (let i = 0; i < 5; i++) {
            if (await this.continueBtn.isDisplayed().catch(() => false)) {
                await this.continueBtn.click();
                await browser.pause(500);
            }
        }
    }
}

export default new OnboardingPage();
