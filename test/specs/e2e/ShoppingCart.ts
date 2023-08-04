// import SearchBar from "../../components/SearchBar";
import { homeUrl } from "../../config/PagesUrl";
import ShoppingCartPhrases from "../../config/ShoppingCartPhrases";
import ShoppingCart from "../../pages/ShoppingCart";
// import { SBPhrase1 } from "../../config/SearchBarPhrases";
// import GlobalPage from "../../pages/GlobalPage";
// import ProductPage from "../../pages/ProductPage";
// import ShoppingCart from "../../pages/ShoppingCart";
// import ShoppingCartPhrases from "../../config/ShoppingCartPhrases";
//id = 9
// describe("Adding product to the shopping cart - from Product page", async () => {
//   before(async () => {
//     await GlobalPage.reloadTheSession();
//     await browser.url(homeUrl);
//   });
//   it("Find product by searchbar.", async () => {
//     await SearchBar.searchInputSetValue(SBPhrase1);
//     await SearchBar.searchBarButtonClick();
//   });
//   it("Find the result and open the product site.", async () => {
//     await SearchBar.searchBarResultClick(SBPhrase1);
//   });
//   it("Click the 'add to cart' button.", async () => {
//     await ProductPage.AddToCardButtonClick();
//   });
//   it("Open the shopping cart.", async () => {
//     await ShoppingCart.OpenShoppingCartButtonClick();
//   });
//   it("Verify the product has been added to the shopping cart.", async () => {
//     await ShoppingCart.VerifyShoppingCartIsNotEmpty();
//   });
// });
// //id = 10
// describe("Adding product to the shopping cart - from Homepage", async () => {
//   before(() => {
//     browser.url(homeUrl);
//   });
//   it("Add first product from the homepage to the shopping cart and open the shopping cart.", async () => {
//     await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
//   });
//   it("Verify the product has been added to the shopping cart.", async () => {
//     await ShoppingCart.VerifyShoppingCartIsNotEmpty();
//   });
// });
// //id = 11
// describe("Remove product from the shopping cart.", async () => {
//   before(async () => {
//     await GlobalPage.reloadTheSession();
//     await browser.url(homeUrl);
//   });
//   //Preconditions
//   it("Add first product from the homepage to the shopping cart.", async () => {
//     await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
//   });
//   it("Click delete product from the shopping cart and verify it has been removed.", async () => {
//     await ShoppingCart.DeleteProduct();
//     await ShoppingCart.VerifyShoppingCartIsEmpty();
//   });
// });
// //id = 12
// describe("Increase the quantity of product in the shopping cart. Verify the value has been changed.", async () => {
//   before(async () => {
//     await GlobalPage.reloadTheSession();
//     await browser.url(homeUrl);
//   });
//   //Preconditions
//   it("Add first product from the homepage to the shopping cart.", async () => {
//     await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
//   });
//   it("Veryfing the increase button is working.", async () => {
//     const initialValue = await ShoppingCart.TheQuantityOfProduct.getValue();
//     await ShoppingCart.IncreaseTheValueOfPieces();
//     await ShoppingCart.UpdateCartButtonClick();
//     const finalValue = await ShoppingCart.TheQuantityOfProduct.getValue();

//     const parsedInitialValue = parseInt(initialValue);
//     const parsedFinalValue = parseInt(finalValue);
//     console.log(parsedInitialValue);
//     console.log(parsedFinalValue);

//     await expect(parsedInitialValue).toEqual(parsedFinalValue - 1);
//   });
// });
// //id = 13
// describe("Decrease the quantity of product in the shopping cart. Verify the value has been changed.", async () => {
//   before(async () => {
//     await GlobalPage.reloadTheSession();
//     await browser.url(homeUrl);
//   });
//   //Preconditions
//   it("Add first product from the homepage to the shopping cart.", async () => {
//     await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
//     await browser.url(homeUrl);
//   });
//   //Preconditions
//   it("Add same product again from the homepage to the shopping cart.", async () => {
//     await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
//   });
//   it("Veryfing the decrease button is working.", async () => {
//     const initialValue = await ShoppingCart.TheQuantityOfProduct.getValue();
//     await ShoppingCart.DecreaseTheValueOfPieces();
//     await ShoppingCart.UpdateCartButtonClick();
//     const finalValue = await ShoppingCart.TheQuantityOfProduct.getValue();

//     const parsedInitialValue = parseInt(initialValue);
//     const parsedFinalValue = parseInt(finalValue);
//     console.log(parsedInitialValue);
//     console.log(parsedFinalValue);

//     await expect(parsedInitialValue).toEqual(parsedFinalValue + 1);
//   });
// });
//IN PROGRESS
//id = 14
describe("Verify the coupon for all products is working correctly. Should set 10 percent of discount for each product in the shopping cart.", async () => {
  before(async () => {
    // await GlobalPage.reloadTheSession();
    await browser.url(homeUrl);
  });
  //Preconditions
  it("Add first product to the shopping cart(Jeans category).", async () => {
    await ShoppingCart.AddProductToCartFromHomepageAndOpenItById("52");
    await browser.url(homeUrl);
  });
  //Preconditions
  it("Add second product to the shopping cart(Shirt category).", async () => {
    await ShoppingCart.AddProductToCartFromHomepageAndOpenItById("56");
  });
  it("Adding the coupon and click the apply coupon button.", async () => {
    await ShoppingCart.setCouponInputValue(ShoppingCartPhrases.CouponForAll);
    await ShoppingCart.ApplyCouponButtonClick();
  });
  it("Verify the prices are correct.", async () => {
    let jeansInitialPrice: string = await $(
      'tbody > .cart_item:first-of-type > td[data-title="Price"] > span'
    ).getText();
    let shirtInitialPrice: string = await $(
      'tbody > .cart_item:nth-of-type(2) > td[data-title="Price"] > span'
    ).getText();
    //text is in "price zł" format, so we must use the split method to get only price value.
    jeansInitialPrice = jeansInitialPrice.split(" ")[0];
    shirtInitialPrice = shirtInitialPrice.split(" ")[0];
    //parse values to float numbers with two decimals places, becaouse we must multply this by 0.9(10 percent of discount).
    jeansInitialPrice = parseFloat(jeansInitialPrice).toFixed(2);
    shirtInitialPrice = parseFloat(shirtInitialPrice).toFixed(2);
    //count the product's price with the 10 percent of discount.
    // const jeansWithDiscountPrice = jeansInitialPrice * 0.9;

    // console.log(jeansInitialPrice);
    // console.log(shirtInitialPrice);
  });
});
// describe("Verify the coupon for a specific product category is working correctly. Should set 10 percent of discount just for shirts in shopping cart.", async () => {
//   before(async () => {
//     await GlobalPage.reloadTheSession();
//     await browser.url(homeUrl);
//   });
// });
