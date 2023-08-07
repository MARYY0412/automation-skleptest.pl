import SearchBar from "../../components/SearchBar";
import { homeUrl } from "../../config/PagesUrl";
import ShoppingCartPhrases from "../../config/ShoppingCartPhrases";
import ShoppingCart from "../../pages/ShoppingCart";
import { SBPhrase1 } from "../../config/SearchBarPhrases";
import GlobalPage from "../../pages/GlobalPage";
import ProductPage from "../../pages/ProductPage";

//id = 9 - done
describe("Adding product to the shopping cart - from Product page", async () => {
  before(async () => {
    await GlobalPage.reloadTheSession();
    await browser.url(homeUrl);
  });
  it("Find product by searchbar.", async () => {
    await SearchBar.searchInputSetValue(SBPhrase1);
    await SearchBar.searchBarButtonClick();
  });
  it("Find the result and open the product site.", async () => {
    await SearchBar.searchBarResultClick(SBPhrase1);
  });
  it("Click the 'add to cart' button.", async () => {
    await ProductPage.AddToCardButtonClick();
  });
  it("Open the shopping cart.", async () => {
    await ShoppingCart.OpenShoppingCartButtonClick();
  });
  it("Verify the product has been added to the shopping cart.", async () => {
    await ShoppingCart.VerifyShoppingCartIsNotEmpty();
  });
});
//id = 10 - done
describe("Adding product to the shopping cart - from Homepage", async () => {
  before(() => {
    browser.url(homeUrl);
  });
  it("Add first product from the homepage to the shopping cart and open the shopping cart.", async () => {
    await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
  });
  it("Verify the product has been added to the shopping cart.", async () => {
    await ShoppingCart.VerifyShoppingCartIsNotEmpty();
  });
});
//id = 11 - done
describe("Remove product from the shopping cart.", async () => {
  before(async () => {
    await GlobalPage.reloadTheSession();
    await browser.url(homeUrl);
  });
  //Preconditions
  it("Add first product from the homepage to the shopping cart.", async () => {
    await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
  });
  it("Click delete product from the shopping cart and verify it has been removed.", async () => {
    await ShoppingCart.DeleteProduct();
    await ShoppingCart.VerifyShoppingCartIsEmpty();
  });
});
//id = 12 - - it works, but the code will be improved.
describe("Increase the quantity of product in the shopping cart. Verify the value has been changed.", async () => {
  before(async () => {
    await GlobalPage.reloadTheSession();
    await browser.url(homeUrl);
  });
  //Preconditions
  it("Add first product from the homepage to the shopping cart.", async () => {
    await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
  });
  it("Veryfing the increase button is working.", async () => {
    const initialValue = await ShoppingCart.TheQuantityOfProduct.getValue();
    await ShoppingCart.IncreaseTheValueOfPieces();
    await ShoppingCart.UpdateCartButtonClick();
    const finalValue = await ShoppingCart.TheQuantityOfProduct.getValue();

    const parsedInitialValue = parseInt(initialValue);
    const parsedFinalValue = parseInt(finalValue);
    console.log(parsedInitialValue);
    console.log(parsedFinalValue);

    await expect(parsedInitialValue).toEqual(parsedFinalValue - 1);
  });
});
//id = 13 - it works, but the code will be improved.
describe("Decrease the quantity of product in the shopping cart. Verify the value has been changed.", async () => {
  before(async () => {
    await GlobalPage.reloadTheSession();
    await browser.url(homeUrl);
  });
  //Preconditions
  it("Add first product from the homepage to the shopping cart.", async () => {
    await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
    await browser.url(homeUrl);
  });
  //Preconditions
  it("Add same product again from the homepage to the shopping cart.", async () => {
    await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
  });
  it("Veryfing the decrease button is working.", async () => {
    const initialValue = await ShoppingCart.TheQuantityOfProduct.getValue();
    await ShoppingCart.DecreaseTheValueOfPieces();
    await ShoppingCart.UpdateCartButtonClick();
    const finalValue = await ShoppingCart.TheQuantityOfProduct.getValue();

    const parsedInitialValue = parseInt(initialValue);
    const parsedFinalValue = parseInt(finalValue);
    console.log(parsedInitialValue);
    console.log(parsedFinalValue);

    await expect(parsedInitialValue).toEqual(parsedFinalValue + 1);
  });
});
//IN PROGRESS
//id = 14 - done
describe("Verify the coupon for all products is working correctly. Should set 10 percent of discount for each product in the shopping cart.", async () => {
  before(async () => {
    await GlobalPage.reloadTheSession();
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
  it("Verify the price of first product is correct(jeans category). Should has 10 percent of discount.", async () => {
    const initialPrice = await ShoppingCart.StandardPriceOfFirstProductInCart();
    const finalPrice = await ShoppingCart.FinalPriceOfFirstProductInCart();
    //Rounded price in text
    let discountPrice: string | number = (initialPrice * 0.9).toFixed(2);
    discountPrice = parseFloat(discountPrice);
    //toFixed method returns string, so we must parse it to float
    await expect(finalPrice).toEqual(discountPrice);
  });
  it("Verify the price of second product is correct(shirt category). Should has 10 percent of discount.", async () => {
    const initialPrice =
      await ShoppingCart.StandardPriceOfSecondProductInCart();
    const finalPrice = await ShoppingCart.FinalPriceOfSecondProductInCart();
    //Rounded price in text
    let discountPrice: string | number = (initialPrice * 0.9).toFixed(2);
    discountPrice = parseFloat(discountPrice);
    //toFixed method returns string, so we must parse it to float
    await expect(finalPrice).toEqual(discountPrice);
  });
});
//id = 15 - in progress
// describe("Verify the coupon for a specific product category is working correctly. Should set 10 percent of discount just for shirts in shopping cart.", async () => {
//   before(async () => {
//     await GlobalPage.reloadTheSession();
//     await browser.url(homeUrl);
//   });
// });
