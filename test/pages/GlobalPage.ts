class GlobalPage {
  async openPage(pageUrl: string, expectedPageUrl: string) {
    await browser.url(pageUrl);
    await expect(browser).toHaveUrl(expectedPageUrl);
  }
  async verifyConfirmAlertIsOpen() {
    const isOpen = await browser.isAlertOpen();
    await expect(isOpen).toEqual(true);
    if (!isOpen) console.log("Brak wyświetlonego alertu.");
    return isOpen;
  }
  async verifyCofnirmAlertText(text: string) {
    const isOpen = await this.verifyConfirmAlertIsOpen();
    if (isOpen) {
      const alertText = await browser.getAlertText();
      await expect(alertText).toEqual(text);
    }
  }
}

export default new GlobalPage();
