import { $, $$, driver } from '@wdio/globals';

class SearchPage {

    get searchTab() {
        return $('id=org.wikipedia.alpha:id/search_container');
    }

    get searchInput() {
        return $('id=org.wikipedia.alpha:id/search_src_text');
    }

    async search(term: string) {
        await this.searchTab.waitForDisplayed({ timeout: 4000 });
        await this.searchTab.click();

        await this.searchInput.setValue(term);
        await driver.pause(800);
    }

    async scrollToCity(city: string) {
        const selector = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${city}"))`;

        const cityElement = await $(selector);
        await cityElement.click();
    }
}

export default new SearchPage();
