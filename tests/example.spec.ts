import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { MainPage } from '../page-objects/mainPage';
import { MyAccountPage } from '../page-objects/MyAccountPage';
import { RegistrationPage } from '../page-objects/RegistrationPage';
import { SearchResultPage } from '../page-objects/SearchResultPage';
import { RandomData } from '../helpers/RandomData';
import { log } from 'console';

const seacrableData = "QA";
const randomData = new RandomData();
const password = randomData.generateRandomData();

test('"Search" input field should find a proper information', async ({ page }) => {
    const main = new MainPage(page);
    const seachResult = new SearchResultPage(page);
    await main.goto();
    await main.fillSeacrhInput(seacrableData);
    await page.keyboard.press('Enter');
    await seachResult.searchableDataIsPresentInFirstResult(seacrableData);
});

test('Email verification alert is shown after registration', async ({ page }) => {
  const main = new MainPage(page);
  const registration = new RegistrationPage(page);
  const login = new LoginPage(page);
  await main.goto();
  await main.clickOnTheRegistrationButton();
  await registration.fillLoginInput(await randomData.generateRandomData());
  await registration.fillPasswordInput(password);
  await registration.fillRepearPasswordInput(password);
  await registration.fillFirstNameInput("Andrii");
  await registration.fillLastNameInput("Stetsula");
  await registration.fillEmailInput(await randomData.generateRandomData() + "@gmail.com");
  await registration.clickOnSendButton();
  await login.successfulRegistrationMessageIsShown();
});

test('"My account" button is present for logged in user', async ({ page }) => {
  const main = new MainPage(page);
  const login = new LoginPage(page);
  await main.goto();
  await main.clickOnTheLoginButton();
  await login.loginWithValidData();
  await main.myAccountButtonIsPresent();
});

test('The user should be able to change the First Name in the account settings section', async ({ page }) => {
  const main = new MainPage(page);
  const login = new LoginPage(page);
  const myAccount = new MyAccountPage(page);
  await main.goto();
  await main.clickOnTheLoginButton();
  await login.loginWithValidData();
  await main.clickOnTheMyAccountButton();
  await myAccount.clearFirstNameInput();
  await myAccount.fillFirstNameInput(await randomData.generateRandomData());
  await myAccount.clickOnTheSubmitButton();
  await myAccount.successMessageIsDisplayed();
});

test('Log out from the account', async ({ page }) => {
  const main = new MainPage(page);
  const login = new LoginPage(page);
  await main.goto();
  await main.clickOnTheLoginButton();
  await login.loginWithValidData();
  await main.myAccountButtonIsPresent();
  await main.clickOnTheLogoutButton();
  await main.myAccountButtonIsNotPresent();
});
