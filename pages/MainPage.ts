import { expect, type Locator, type Page } from "@playwright/test";

export class MainPage{
    readonly page: Page;
    readonly searchInput: Locator;
    readonly registrationButton: Locator;
    readonly logInButton: Locator;
    readonly myAccountButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.searchInput = page.locator('[class="small"]');
        this.registrationButton = page.locator('[class="register"]');
        this.logInButton = page.locator('[class="login"]');
        this,this.myAccountButton = page.locator('[class="my-account"]');
        this.logoutButton = page.locator('[class="logout"]');
    }

    async goto(){
        await this.page.goto('https://www.redmine.org/');
    }

    async fillSeacrhInput(data : string){
        await this.searchInput.fill(data);
    }

    async clickOnTheRegistrationButton(){
        await this.registrationButton.click();
    }

    async clickOnTheLoginButton(){
        await this.logInButton.click();
    }

    async clickOnTheMyAccountButton(){
        await this.myAccountButton.click();
    }

    async clickOnTheLogoutButton(){
        await this.logoutButton.click();
    }
}