import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { MainPage } from '../page-objects/mainPage';
import { MyAccountPage } from '../page-objects/MyAccountPage';
import { RegistrationPage } from '../page-objects/RegistrationPage';
import { SearchResultPage } from '../page-objects/SearchResultPage';
import { RandomData } from '../helpers/RandomData';

const seacrableData = "QA";
const randomData = new RandomData();
const password = randomData.generateRandomData();
let mainPage;
let registrationPage;
let loginPage;
let searchResultPage;
let myAccountPage;

test.beforeEach(async ({ page }) => {
  mainPage = new MainPage(page);
  registrationPage = new RegistrationPage(page);
  loginPage = new LoginPage(page);
  searchResultPage = new SearchResultPage(page);
  myAccountPage = new MyAccountPage(page);
  await mainPage.goto();
});

test('"Search" input field should find a proper information', async ({ page }) => {
    await mainPage.fillSeacrhInput(seacrableData);
    await page.keyboard.press('Enter');
    await searchResultPage.searchableDataIsPresentInFirstResult(seacrableData);
});

test('Email verification alert is shown after registration', async ({ page }) => {
  await mainPage.clickOnTheRegistrationButton();
  await registrationPage.fillLoginInput(randomData.generateRandomData());
  await registrationPage.fillPasswordInput(password);
  await registrationPage.fillRepearPasswordInput(password);
  await registrationPage.fillFirstNameInput("Andrii");
  await registrationPage.fillLastNameInput("Stetsula");
  await registrationPage.fillEmailInput(randomData.generateRandomData() + "@gmail.com");
  await registrationPage.clickOnSendButton();
  await loginPage.successfulRegistrationMessageIsShown();
});

test('"My account" button is present for logged in user', async ({ page }) => {
  await mainPage.clickOnTheLoginButton();
  await loginPage.loginWithValidData();
  await mainPage.myAccountButtonIsPresent();
});

test('The user should be able to change the First Name in the account settings section', async ({ page }) => {
  await mainPage.clickOnTheLoginButton();
  await loginPage.loginWithValidData();
  await mainPage.clickOnTheMyAccountButton();
  await myAccountPage.clearFirstNameInput();
  await myAccountPage.fillFirstNameInput(randomData.generateRandomData());
  await myAccountPage.clickOnTheSubmitButton();
  await myAccountPage.successMessageIsDisplayed();
});

test('Log out from the account', async ({ page }) => {
  await mainPage.clickOnTheLoginButton();
  await loginPage.loginWithValidData();
  await mainPage.myAccountButtonIsPresent();
  await mainPage.clickOnTheLogoutButton();
  await mainPage.myAccountButtonIsNotPresent();
});
