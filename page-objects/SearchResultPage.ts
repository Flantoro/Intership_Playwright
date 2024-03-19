import { expect, type Locator, type Page } from "@playwright/test";

export class SearchResultPage{
    readonly page: Page;
    readonly firstResultDescription: Locator;


    constructor(page: Page){
        this.page = page;
        this.firstResultDescription = page.locator('//dd[1]//span[@class="highlight token-0"]');
    }

    async searchableDataIsPresentInFirstResult(searhableData){
        let findedString = await this.firstResultDescription.textContent();
        await expect(findedString?.toLowerCase()).toContain(searhableData.toLowerCase());
    }
}