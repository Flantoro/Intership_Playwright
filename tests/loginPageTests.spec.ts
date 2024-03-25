import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { MainPage } from '../pages/mainPage';
import { credentials } from '../helpers/credentials';

let mainPage;
let loginPage;

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    loginPage = new LoginPage(page);
    await mainPage.goto();
  });

test('"My account" button is present for logged in user', async ({ page }) => {
    await mainPage.clickOnTheLoginButton();
    await loginPage.loginWithValidData(credentials.username, credentials.password);
    await expect(mainPage.myAccountButton).toBeVisible();
  });