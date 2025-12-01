import { $, $$, driver } from '@wdio/globals';

class ArticlePage {

    async scrollToBottom() {
        await driver.touchPerform([
            { action: 'press', options: { x: 500, y: 1600 }},
            { action: 'wait', options: { ms: 300 }},
            { action: 'moveTo', options: { x: 500, y: 200 }},
            { action: 'release' }
        ]);

        await driver.pause(800);
    }

    async openArticle(article: string) {
        const selector = `android=new UiSelector().text("${article}")`;
        const element = await $(selector);
        await element.click();
    }
}

export default new ArticlePage();
