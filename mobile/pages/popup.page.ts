import { $, browser } from "@wdio/globals";

class PopupPage {

    get negativeBtn() {
        return $('id=org.wikipedia.alpha:id/negativeButton');
    }

    async closeIfVisible() {
        if (await this.negativeBtn.isDisplayed().catch(() => false)) {
            await this.negativeBtn.click();
            await browser.pause(300);
        }
    }
}

export default new PopupPage();
