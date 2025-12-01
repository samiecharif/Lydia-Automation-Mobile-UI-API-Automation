import { Given, When, Then } from '@wdio/cucumber-framework';

import OnboardingPage from '../pages/onboarding.page';
import SearchPage from '../pages/search.page';
import LanguagePage from '../pages/language.page';
import ArticlePage from '../pages/article.page';
import PopupPage from '../pages/popup.page';


Given('I launch the app', async () => {
    await browser.pause(2000);
    await PopupPage.closeIfVisible();
});


When('I swipe through the onboarding carousel', async () => {
    await OnboardingPage.completeOnboarding();
});


When('I search for {string}', async (searchTerm: string) => {
    await PopupPage.closeIfVisible();
    await SearchPage.search(searchTerm);
});


When('I scroll until I see the city {string}', async (city: string) => {
    await PopupPage.closeIfVisible();
    await SearchPage.scrollToCity(city);
});

When('I dismiss the popup if visible', async () => {
    await PopupPage.closeIfVisible();
});


When('I change the language to French', async () => {
    await LanguagePage.changeToFrench();
});


When('I scroll to the bottom of the page', async () => {
    await ArticlePage.scrollToBottom();
});


Then('I click on {string} and navigate to the new page', async (articleTitle: string) => {
    await PopupPage.closeIfVisible();
    await ArticlePage.openArticle();
});

Then('I should see search results', async () => {
    await expect(SearchPage.resultItem).toBeDisplayed();
});
