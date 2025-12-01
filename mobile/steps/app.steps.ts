import { $, $$, driver } from '@wdio/globals';

import { Given, When, Then } from '@wdio/cucumber-framework';

import OnboardingPage from '../pages/onboarding.page';
import SearchPage from '../pages/search.page';
import LanguagePage from '../pages/language.page';
import ArticlePage from '../pages/article.page';
import PopupPage from '../pages/popup.page';

Given("I launch the app", async () => {
    await driver.pause(800);
    await PopupPage.closeIfVisible();
});

When("I swipe through the onboarding carousel", async () => {
    await OnboardingPage.completeOnboarding();
});

When("I search for {string}", async (searchTerm: string) => {
    await SearchPage.search(searchTerm);
});

When("I scroll to the city {string}", async (city: string) => {
    await SearchPage.scrollToCity(city);
});

When("I change the language to French", async () => {
    await LanguagePage.changeToFrench();
});

When("I scroll to the bottom of the page", async () => {
    await ArticlePage.scrollToBottom();
});

Then("I open the article {string}", async (article: string) => {
    await ArticlePage.openArticle(article);
});
