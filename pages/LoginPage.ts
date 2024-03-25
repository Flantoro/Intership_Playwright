import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly UserNameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly leaveMeSignedInCheckbox: Locator;
    readonly successRegistrationMessage: Locator;


    constructor(page: Page){
        this.page = page;
        this.UserNameInput = page.locator('[id="username"]');
        this.passwordInput = page.locator('[id="password"]');
        this.loginButton = page.locator('[id="login-submit"]');
        this.leaveMeSignedInCheckbox = page.locator('[id="autologin"]');
        this.successRegistrationMessage = page.locator('[id="flash_notice"]');
    }

    async fillUserNameInput(username : string){
        await this.UserNameInput.fill(username);
    }

    async fillPasswordIput(password : string){
        await this.passwordInput.fill(password);
    }

    async clickOnTheLoginButton(){
        await this.loginButton.click();
    }

    async checkleaveMeSignedInCheckbox(){
        await this.leaveMeSignedInCheckbox.check();
    }

    async loginWithValidData(username : string, password : string){
        await this.fillUserNameInput(username);
        await this.fillPasswordIput(password);
        await this.checkleaveMeSignedInCheckbox();
        await this.clickOnTheLoginButton();
    }
}