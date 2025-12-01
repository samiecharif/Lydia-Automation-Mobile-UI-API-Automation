import { $, driver } from '@wdio/globals';

class OnboardingPage {

    get continueButton() {
        return $('id=org.wikipedia.alpha:id/fragment_onboarding_forward_button');
    }

    get getStartedButton() {
        return $('id=org.wikipedia.alpha:id/fragment_onboarding_done_button');
    }

    /**
     * Swipe le carousel jusqu’à la fin
     */
    private async swipeLeft() {
        const { width, height } = await driver.getWindowRect();

        const startX = Math.floor(width * 0.9);
        const endX   = Math.floor(width * 0.1);
        const y      = Math.floor(height * 0.5);

        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: y },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 200 },
                { type: 'pointerMove', duration: 500, x: endX, y: y },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(600);
    }

    /**
     * Complète l’onboarding : swipe x3 + bouton Start
     */
    async completeOnboarding() {
        // Onboarding = 4 écrans → besoin de 3 swipes
        for (let i = 0; i < 3; i++) {
            try {
                if (await this.continueButton.isDisplayed()) {
                    await this.continueButton.click();
                    await driver.pause(600);
                } else {
                    // Si le bouton n'est pas visible → swipe
                    await this.swipeLeft();
                }
            } catch (e) {
                await this.swipeLeft();
            }
        }

        // Dernier bouton : "Get started"
        try {
            if (await this.getStartedButton.isDisplayed()) {
                await this.getStartedButton.click();
                await driver.pause(800);
            }
        } catch (e) {}
    }
}

export default new OnboardingPage();
