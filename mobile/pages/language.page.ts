import { $, browser } from "@wdio/globals";

class LanguagePage {

    get menuBtn() {
        return $('~More options');
    }

    get languagesBtn() {
        return $('//*[@text="Languages"]');
    }

    get addLanguageBtn() {
        return $('id=org.wikipedia.alpha:id/addLanguageButton');
    }

    get frenchOption() {
        return $('//*[@text="Français"]');
    }

    async changeToFrench() {
        await this.menuBtn.waitForDisplayed({ timeout: 5000 });
        await this.menuBtn.click();

        await this.languagesBtn.click();
        await this.addLanguageBtn.click();

        await this.frenchOption.click();
        await browser.pause(500);
    }
}

export default new LanguagePage();
