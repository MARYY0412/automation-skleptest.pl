class ShoppingCart {
  //refs
  get OpenShoppingCartButtonRef() {
    return $('a[href="https://skleptest.pl/cart/"]');
  }
  get DeleteProductButtonRef() {
    return $('a[aria-label="Remove this item"]');
  }
  get IncreaseQuantityButtonRef() {
    return $('a[data-increment="up"]');
  }
  get DecreaseQuantityButtonRef() {
    return $('a[data-increment="down"]');
  }
  get UpdateCartButtonRef() {
    return $('input[name="update_cart"]');
  }
  get TheQuantityOfProduct() {
    return $(".quantity > div > input");
  }
  //Open the shopping cart
  async OpenShoppingCartButtonClick() {
    const button: WebdriverIO.Element = await this.OpenShoppingCartButtonRef;
    await button.click();
  }
  //verify the product exist
  async VerifyShoppingCartIsNotEmpty() {
    const emptyLabel: WebdriverIO.Element = await $(
      "p*=Your cart is currently empty."
    );
    await expect(await emptyLabel.isExisting()).toBe(false);
  }
  async VerifyShoppingCartIsEmpty() {
    const emptyLabel: WebdriverIO.Element = await $(
      "p*=Your cart is currently empty."
    );
    await expect(await emptyLabel.isExisting()).toBe(true);
  }
  //Delete product
  async DeleteProduct() {
    const deleteButton: WebdriverIO.Element = await this.DeleteProductButtonRef;
    await deleteButton.click();
  }
  //change the quantity of product
  async IncreaseTheValueOfPieces() {
    const incrementButton: WebdriverIO.Element = await this
      .IncreaseQuantityButtonRef;
    incrementButton.click();
  }
  async DecreaseTheValueOfPieces() {
    const decrementButton: WebdriverIO.Element = await this
      .DecreaseQuantityButtonRef;
    decrementButton.click();
  }
  async UpdateCartButtonClick() {
    const updateButton: WebdriverIO.Element = await this.UpdateCartButtonRef;
    await updateButton.click();
  }
  //Preapration for the shopping cart tests
  async AddProductToCartFromHomepageAndOpenIt() {
    //find the first "add to cart" button and click it.
    const FirstAddToCartButton: WebdriverIO.Element = await $(
      ".ajax_add_to_cart:first-of-type"
    );
    await FirstAddToCartButton.waitForDisplayed();
    await FirstAddToCartButton.click();
    //wait until the viewCart button will be showed.
    //It's required becouse we must open the shopping cart after that.
    //Otherwise the cart will be empty.
    const viewCartButton: WebdriverIO.Element = await $('a[title="View cart"]');
    await viewCartButton.waitForDisplayed();
    //Just open the cart
    await this.OpenShoppingCartButtonClick();
  }
}

export default new ShoppingCart();