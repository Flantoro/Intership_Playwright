import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage.ts';
import { RegistrationPage } from '../pages/RegistrationPage.ts';
import { LoginPage } from '../pages/loginPage.ts';
import { RandomData } from '../helpers/RandomData.ts';

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
    await registrationPage.fillFirstNameInput("Andrii");
    await registrationPage.fillLastNameInput("Stetsula");
    await registrationPage.fillEmailInput(randomData.generateRandomData() + "@gmail.com");
    await registrationPage.clickOnSendButton();
    await expect(loginPage.successRegistrationMessage).toBeVisible();
  });