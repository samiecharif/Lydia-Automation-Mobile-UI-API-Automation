class LanguagePage {
    get menuBtn() { return $('~More'); }
    get settingsBtn() { return $('id=preference_title'); }
    get languageBtn() { return $('android=new UiSelector().text("Wikipedia language")'); }
    get frenchOption() { return $('android=new UiSelector().text("Français")'); }

    async changeToFrench() {
        await this.menuBtn.click();
        await this.settingsBtn.click();
        await this.languageBtn.click();
        await this.frenchOption.click();
    }
}

export default new LanguagePage();
