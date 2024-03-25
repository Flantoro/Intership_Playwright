import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { SearchResultPage } from '../pages/SearchResultPage';

let searhableData = "QA";
let mainPage;
let searchResultPage;

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    searchResultPage = new SearchResultPage(page);
    await mainPage.goto();
});


test('"Search" input field should find a proper information', async ({ page }) => {
    await mainPage.fillSeacrhInput(searhableData);
    await page.keyboard.press('Enter');
    expect((await searchResultPage.firstResultDescription.innerHTML()).toLowerCase()).toContain(searhableData.toLowerCase());
});