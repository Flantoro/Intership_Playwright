import { expect, type Locator, type Page } from "@playwright/test";

class MainPage{
    readonly page: Page;
    readonly searchInput: Locator;
    readonly registrationButton: Locator;
    readonly logInButton: Locator;
    readonly myAccountButton: Locator;
    readonly logOutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.searchInput = page.locator('[class="small"]');
        this.registrationButton = page.locator('[class="register"]');
        this.logInButton = page.locator('[class="login"]');
        this,this.myAccountButton = page.locator('[class="my-account"]');
        this.logInButton = page.locator('[class="logout"]');
    }

    async fillSeacrhInput(data){
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
        await this.logOutButton.click();
    }

    async myAccountButtonIsPresent(){
        await expect(this.myAccountButton).toBeVisible();
    }
}