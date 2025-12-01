import { $, browser } from "@wdio/globals";

class ArticlePage {

    get articleTitle() {
        return $('id=org.wikipedia.alpha:id/view_page_title_text');
    }

    async scrollToBottom() {
        for (let i = 0; i < 6; i++) {
            await browser.touchPerform([
                { action: "press", options: { x: 300, y: 1500 }},
                { action: "wait", options: { ms: 300 }},
                { action: "moveTo", options: { x: 300, y: 200 }},
                { action: "release" }
            ]);
            await browser.pause(300);
        }
    }

    async openArticle(title: string) {
        const article = await $(`//*[@text="${title}"]`);
        await article.waitForDisplayed({ timeout: 7000 });
        await article.click();
    }
}

export default new ArticlePage();
