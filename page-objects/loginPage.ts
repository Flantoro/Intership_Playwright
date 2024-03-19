import { expect, type Locator, type Page } from "@playwright/test";

class LoginPage{
    readonly page: Page;
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly leaveMeSignedInCheckbox: Locator;


    constructor(page: Page){
        this.page = page;
        this.loginInput = page.locator('[id="username"]');
        this.passwordInput = page.locator('[id="password"]');
        this.loginButton = page.locator('[id="login-submit"]');
        this.leaveMeSignedInCheckbox = page.locator('[id="autologin"]');
    }

    async fillUsrnameInput(login){
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
}