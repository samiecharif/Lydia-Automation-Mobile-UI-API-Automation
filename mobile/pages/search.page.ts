import { ChainablePromiseElement } from "webdriverio";

class SearchPage {

    get searchBox() {

        return $('id=org.wikipedia.alpha:id/search_src_text');
    }

    async search(text: string) {
        await this.searchBox.waitForDisplayed({ timeout: 5000 });
        await this.searchBox.setValue(text);
        await driver.pause(1000);
    }

    async scrollToCity(city: string) {
        const selector =
            `android=new UiScrollable(new UiSelector().scrollable(true))` +
            `.scrollIntoView(new UiSelector().text("${city}"))`;

        const element = await $(selector);

        await element.waitForDisplayed({ timeout: 5000 });
        await element.click();
        await driver.pause(1000);
    }
    get resultItem() {
    return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title")');
}

}

export default new SearchPage();
