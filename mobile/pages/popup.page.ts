import { ChainablePromiseElement } from 'webdriverio';

class PopupPage {
    get closeButton() {
        return $('id=org.wikipedia.alpha:id/view_announcement_close_button');
    }

    async closeIfVisible() {
        try {
            if (await this.closeButton.isDisplayed()) {
                await this.closeButton.click();
                await driver.pause(500);
            }
        } catch (e) {
           
        }
    }
}

export default new PopupPage();
