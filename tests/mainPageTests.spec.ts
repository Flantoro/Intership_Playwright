import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.ts';
import { MainPage } from '../pages/mainPage.ts';
import { credentials } from '../helpers/credentials.ts';

let mainPage;
let loginPage;

test.beforeEach(async ({ page }) => {
  mainPage = new MainPage(page);
  loginPage = new LoginPage(page);
  await mainPage.goto();
});

test('Log out from the account', async ({ page }) => {
  await mainPage.clickOnTheLoginButton();
  await loginPage.loginWithValidData(credentials.username, credentials.password);
  await expect(mainPage.myAccountButton).toBeVisible();
  await mainPage.clickOnTheLogoutButton();
  await expect(mainPage.myAccountButton).not.toBeVisible();
});
