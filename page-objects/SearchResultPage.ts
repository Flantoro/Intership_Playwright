import { expect, type Locator, type Page } from "@playwright/test";

export class SearchResultPage{
    readonly page: Page;
    readonly firstResultDescription: Locator;


    constructor(page: Page){
        this.page = page;
        this.firstResultDescription = page.locator('//dd[1]//span[@class="description"]');
    }

    async searchableDataIsPresentInFirstResult(searhableData : string){
        expect((await this.firstResultDescription.innerHTML()).toLowerCase()).toContain(searhableData.toLowerCase());
    }
}