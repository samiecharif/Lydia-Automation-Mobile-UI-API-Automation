import { $, $$, driver } from '@wdio/globals';

class LanguagePage {

    get moreOptions() {
        return $('~More options');
    }

    get settingsButton() {
        return $('xpath=//android.widget.TextView[@text="Settings"]');
    }

    get appLanguage() {
        return $('xpath=//android.widget.TextView[@text="Wikipedia languages"]');
    }

    get frenchOption() {
        return $('xpath=//android.widget.TextView[@text="Français"]');
    }

    async changeToFrench() {
        await this.moreOptions.click();
        await this.settingsButton.click();
        await this.appLanguage.click();

        await this.frenchOption.click();
        await driver.pause(800);
    }
}

export default new LanguagePage();
