import { expect, type Locator, type Page } from "@playwright/test";

class mainPage{
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
}