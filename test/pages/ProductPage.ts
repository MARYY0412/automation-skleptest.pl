class ProductPage {
  get AddToCartButtonRef() {
    return $('button[name="add-to-cart"]');
  }
  async AddToCardButtonClick() {
    const button: WebdriverIO.Element = await this.AddToCartButtonRef;
    await button.click();
  }
}

export default new ProductPage();
