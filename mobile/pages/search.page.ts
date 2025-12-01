import { $, browser } from "@wdio/globals";

class SearchPage {

    get searchContainer() {
        return $('id=org.wikipedia.alpha:id/search_container');
    }

    get searchInput() {
        return $('id=org.wikipedia.alpha:id/search_src_text');
    }

    get resultsList() {
        return $$('id=org.wikipedia.alpha:id/page_list_item_title');
    }

    async search(term: string) {
        await this.searchContainer.waitForDisplayed({ timeout: 5000 });
        await this.searchContainer.click();
        await browser.pause(300);
        await this.searchInput.setValue(term);
        await browser.pause(500);
    }

    async scrollToCity(city: string) {
        let found = false;

        for (let i = 0; i < 10; i++) {
            const items = await this.resultsList;

            for (const el of items) {
                const text = await el.getText();
                if (text.toLowerCase().includes(city.toLowerCase())) {
                    await el.click();
                    found = true;
                    break;
                }
            }

            if (found) break;

            // Swipe down
            await browser.touchPerform([
                { action: "press", options: { x: 300, y: 1400 }},
                { action: "wait", options: { ms: 300 }},
                { action: "moveTo", options: { x: 300, y: 300 }},
                { action: "release" }
            ]);

            await browser.pause(400);
        }
    }
}

export default new SearchPage();
