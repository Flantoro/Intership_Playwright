import { expect, type Locator, type Page } from "@playwright/test";

export class RegistrationPage{
    readonly page: Page;
    readonly loginInput: Locator;
    readonly passwordInput: Locator;
    readonly repeatPasswordInput: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly sendButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginInput = page.locator('[id="user_login"]');
        this.passwordInput = page.locator('[id="user_password"]');
        this.repeatPasswordInput = page.locator('[id="user_password_confirmation"]');
        this.firstNameInput = page.locator('[id="user_firstname"]');
        this.lastNameInput = page.locator('[id="user_lastname"]');
        this.emailInput = page.locator('[id="user_mail"]');
        this.sendButton = page.locator('[name="commit"]');
    }

    async fillLoginInput(login : string){
        await this.loginInput.fill(login);
    }

    async fillPasswordInput(password : string){
        await this.passwordInput.fill(password); 
    }

    async fillRepearPasswordInput(password : string){
        await this.repeatPasswordInput.fill(password);
    }

    async fillFirstNameInput(firstName : string){
        await this.firstNameInput.fill(firstName)
    }

    async fillLastNameInput(lastName : string){
        await this.lastNameInput.fill(lastName);
    }

    async fillEmailInput(email : string){
        await this.emailInput.fill(email);
    }

    async clickOnSendButton(){
        await this.sendButton.click();
    }
}