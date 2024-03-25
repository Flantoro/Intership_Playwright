import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.ts';
import { MainPage } from '../pages/mainPage.ts';
import { MyAccountPage } from '../pages/MyAccountPage.ts';
import { RandomData } from '../helpers/RandomData.ts';
import { credentials } from '../helpers/credentials.ts';

let randomData;
let mainPage;
let loginPage;
let myAccountPage;

test.beforeEach(async ({ page }) => {
  mainPage = new MainPage(page);
  loginPage = new LoginPage(page);
  myAccountPage = new MyAccountPage(page);
  randomData = new RandomData();
  await mainPage.goto();
});

test('The user should be able to change the First Name in the account settings section', async ({ page }) => {
  await mainPage.clickOnTheLoginButton();
  await loginPage.loginWithValidData(credentials.username, credentials.password);
  await mainPage.clickOnTheMyAccountButton();
  await myAccountPage.clearFirstNameInput();
  await myAccountPage.fillFirstNameInput(randomData.generateRandomData());
  await myAccountPage.clickOnTheSubmitButton();
  await expect(myAccountPage.successMessage).toBeVisible()
});
