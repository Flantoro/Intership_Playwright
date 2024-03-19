import { expect, type Locator, type Page } from "@playwright/test";

class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly logInButton: Locator;
    readonly leaveMeSignedInCheckbox: Locator;


    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('[id="username"]');
        this.passwordInput = page.locator('[id="password"]');
        this.logInButton = page.locator('[id="login-submit"]');
        this.leaveMeSignedInCheckbox = page.locator('[id="autologin"]');
    }

    async fillUsrnameInput(username){
        await this.usernameInput.fill(username);
    }

    async fillPasswordIput(password){
        await this.passwordInput.fill(password);
    }

    async clickOnTheLoginButton(){
        await this.logInButton.click();
    }

    async checkleaveMeSignedInCheckbox(){
        await this.leaveMeSignedInCheckbox.check();
    }
}