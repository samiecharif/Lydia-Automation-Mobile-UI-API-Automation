import { $, $$, driver } from '@wdio/globals';

class PopupPage {

    get closeButton() {
        return $('id=org.wikipedia.alpha:id/negativeButton');
    }

    async closeIfVisible() {
        try {
            if (await this.closeButton.isDisplayed()) {
                await this.closeButton.click();
                await driver.pause(300);
            }
        } catch {}
    }
}

export default new PopupPage();
