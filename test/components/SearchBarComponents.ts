export class SearchBarComponent {
  //getters
  get ButtonReference() {
    return $("#search-top-bar-submit");
  }
  get InputReference() {
    return $("#search-field-top-bar");
  }
  //input
  async searchInputIsVisible() {
    const input: WebdriverIO.Element = await this.InputReference;
    await input.waitForDisplayed();
  }
  async searchInputSetValue(text: string) {
    const input: WebdriverIO.Element = await this.InputReference;
    await input.waitForDisplayed();
    await input.setValue(text);
  }
  //button
  async searchBarButtonClick() {
    const button: WebdriverIO.Element = await this.ButtonReference;
    await button.waitForDisplayed();
    await button.click();
  }
  // results of searching
  async searchBarFindResult(searchedPhrase: string) {
    const result: WebdriverIO.Element = await $(`a=${searchedPhrase}`);
    await expect(result).toHaveText(searchedPhrase);
  }
}

export default new SearchBarComponent();
