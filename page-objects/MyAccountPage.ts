import { expect, type Locator, type Page } from "@playwright/test";

class MyAccountPage{
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly submitButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page){
        this.page = page;
        this.firstNameInput = page.locator('[id="user_firstname"]');
        this.submitButton = page.locator('[class="mobile-hide"]>input');
        this.successMessage = page.locator('[id="flash_notice"]');
    }

    async clearFirstNameInput(){
        await this.firstNameInput.clear();
    }
    
    async fillFirstNameInput(newFirstName){
        await this.firstNameInput.fill(newFirstName);
    }

    async clickOnTheSubmitButton(){
        this.submitButton.click();
    }

    async successMessageIsDisplayed(){
        await expect(this.successMessage).toBeVisible();
    }
}