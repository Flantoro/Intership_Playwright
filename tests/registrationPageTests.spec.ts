import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/MainPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { LoginPage } from '../pages/LoginPage';
import { RandomData } from '../helpers/RandomData';
import { credentials } from '../helpers/credentials.ts';

let password;
let randomData;
let mainPage;
let registrationPage;
let loginPage;

test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    registrationPage = new RegistrationPage(page);
    loginPage = new LoginPage(page);
    randomData =  new RandomData();
    password = randomData.generateRandomData();
    await mainPage.goto();
});

test('Email verification alert is shown after registration', async ({ page }) => {
    await mainPage.clickOnTheRegistrationButton();
    await registrationPage.fillLoginInput(randomData.generateRandomData());
    await registrationPage.fillPasswordInput(password);
    await registrationPage.fillRepearPasswordInput(password);
    await registrationPage.fillFirstNameInput(credentials.firstName);
    await registrationPage.fillLastNameInput(credentials.lastName);
    await registrationPage.fillEmailInput(randomData.generateRandomData() + "@gmail.com");
    await registrationPage.clickOnSendButton();
    await expect(loginPage.successRegistrationMessage).toBeVisible();
  });