export class SearchBarComponent {
  //input
  get searchInputReference() {
    return $("#search-field-top-bar");
  }
  async searchInputIsVisible() {
    const input: WebdriverIO.Element = await this.searchInputReference;
    await input.waitForDisplayed();
  }
  async searchInputSetValue(text: string) {
    const input: WebdriverIO.Element = await this.searchInputReference;
    await input.waitForDisplayed();
    await input.setValue(text);
  }
  //button
  get searchBarButtonReference() {
    return $("#search-top-bar-submit");
  }
  async searchBarButtonClick() {
    const button: WebdriverIO.Element = await this.searchBarButtonReference;
    await button.waitForDisplayed();
    await button.click();
  }
}

export default new SearchBarComponent();
