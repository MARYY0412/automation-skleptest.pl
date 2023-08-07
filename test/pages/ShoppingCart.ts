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
  //coupons
  get CouponInputRef() {
    return $("#coupon_code");
  }
  get CouponButtonRef() {
    return $('input[name="apply_coupon"]');
  }
  //prices = refs

  async StandardPriceOfFirstProductInCart() {
    //return the value in "value zł" format
    let price: string = await $(
      'tbody > .cart_item:first-of-type > td[data-title="Price"] > span'
    ).getText();
    //return the value without "zł"
    price = price.split(" ")[0];
    //parse the value to number and return it
    return parseFloat(price);
  }
  async StandardPriceOfSecondProductInCart() {
    //return the value in "value zł" format
    let price: string = await $(
      'tbody > .cart_item:nth-of-type(2) > td[data-title="Price"] > span'
    ).getText();
    //return the value without "zł"
    price = price.split(" ")[0];
    //parse the value to number and return it
    return parseFloat(price);
  }
  async FinalPriceOfFirstProductInCart() {
    //return the value in "value zł" format
    let price: string = await $(
      'tbody > .cart_item:first-of-type > td[data-title="Total"] > span'
    ).getText();
    //return the value without "zł"
    price = price.split(" ")[0];
    //parse the value to number and return it
    return parseFloat(price);
  }
  async FinalPriceOfSecondProductInCart() {
    //return the value in "value zł" format
    let price: string = await $(
      'tbody > .cart_item:nth-of-type(2) > td[data-title="Total"] > span'
    ).getText();
    //return the value without "zł"
    price = price.split(" ")[0];
    //parse the value to number and return it
    return parseFloat(price);
  }

  /////FUNCTIONS
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
  async AddProductToCartFromHomepageAndOpenItById(id: string) {
    //find "add-to-cart" button by product ID
    const AddToCartButton = await $(`a[data-product_id="${id}"]`);
    await AddToCartButton.click();
    const viewCartButton: WebdriverIO.Element = await $('a[title="View cart"]');
    await viewCartButton.waitForDisplayed();
    //Just open the cart
    await this.OpenShoppingCartButtonClick();
  }
  //coupons
  async setCouponInputValue(text: string) {
    const input: WebdriverIO.Element = await this.CouponInputRef;
    await input.setValue(text);
  }
  async ApplyCouponButtonClick() {
    const button: WebdriverIO.Element = await this.CouponButtonRef;
    await button.click();
  }
}

export default new ShoppingCart();
