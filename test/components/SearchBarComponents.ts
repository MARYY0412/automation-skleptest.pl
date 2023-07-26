export class SearchBar {
  //getters
  get ButtonRef() {
    return $("#search-top-bar-submit");
  }
  get InputRef() {
    return $("#search-field-top-bar");
  }
  //input
  async searchInputIsVisible() {
    const input: WebdriverIO.Element = await this.InputRef;
    await input.waitForDisplayed();
  }
  async searchInputSetValue(text: string) {
    const input: WebdriverIO.Element = await this.InputRef;
    await input.waitForDisplayed();
    await input.setValue(text);
  }
  //button
  async searchBarButtonClick() {
    const button: WebdriverIO.Element = await this.ButtonRef;
    await button.waitForDisplayed();
    await button.click();
  }
  // results of searching
  async searchBarFindResult(searchedPhrase: string) {
    const result: WebdriverIO.Element = await $(`a=${searchedPhrase}`);
    await expect(result).toHaveText(searchedPhrase);
  }
}

export default new SearchBar();
