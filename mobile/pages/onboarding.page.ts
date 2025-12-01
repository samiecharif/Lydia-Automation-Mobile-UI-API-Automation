import { ChainablePromiseElement } from "webdriverio";

class OnboardingPage {

    get continueButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('id=org.wikipedia.alpha:id/fragment_onboarding_forward_button');
    }

    get getStartedButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('id=org.wikipedia.alpha:id/fragment_onboarding_done_button');
    }

    async completeOnboarding() {

        
        for (let i = 0; i < 3; i++) {
            try {
                if (await this.continueButton.isDisplayed()) {
                    await this.continueButton.click();
                    await driver.pause(800);
                }
            } catch (e) {}
        }

        
        try {
            if (await this.getStartedButton.isDisplayed()) {
                await this.getStartedButton.click();
                await driver.pause(800);
            }
        } catch (e) {}
    
    }
}

export default new OnboardingPage();
