import Gestures from '../utils/gestures';

class ArticlePage {

    get cresusLink() {
        return $('android=new UiSelector().text("Crésus")');
    }

    async scrollToBottom() {
        
        for (let i = 0; i < 7; i++) {
            await Gestures.swipeUp();
            await browser.pause(500);
        }
    }

    async openArticle() {
        await this.cresusLink.waitForDisplayed({ timeout: 10000 });
        await this.cresusLink.click();
    }
}

export default new ArticlePage();
