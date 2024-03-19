import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly leaveMeSignedInCheckbox: Locator;
    readonly successRegistrationMessage: Locator;


    constructor(page: Page){
        this.page = page;
        this.loginInput = page.locator('[id="username"]');
        this.passwordInput = page.locator('[id="password"]');
        this.loginButton = page.locator('[id="login-submit"]');
        this.leaveMeSignedInCheckbox = page.locator('[id="autologin"]');
        this.successRegistrationMessage = page.locator('[id="flash_notice"]');
    }

    async fillLoginInput(login){
        await this.loginInput.fill(login);
    }

    async fillPasswordIput(password){
        await this.passwordInput.fill(password);
    }

    async clickOnTheLoginButton(){
        await this.loginButton.click();
    }

    async checkleaveMeSignedInCheckbox(){
        await this.leaveMeSignedInCheckbox.check();
    }

    async successfulRegistrationMessageIsShown(){
        await expect(this.successRegistrationMessage).toBeVisible();
    }

    async loginWithValidData(){
        await this.fillLoginInput("Flantoro");
        await this.fillPasswordIput("63STyXZgnUdF");
        await this.checkleaveMeSignedInCheckbox();
        await this.clickOnTheLoginButton();
    }
}