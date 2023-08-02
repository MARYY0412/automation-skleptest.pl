import SearchBar from "../../components/SearchBar";
import { homeUrl } from "../../config/PagesUrl";
import { SBPhrase1 } from "../../config/SearchBarPhrases";
import GlobalPage from "../../pages/GlobalPage";
import ProductPage from "../../pages/ProductPage";
import ShoppingCart from "../../pages/ShoppingCart";
//done
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
//done
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
//done
describe("Delete product from the shopping cart.", async () => {
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
//done
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
//done
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
describe("Verify the coupon is working correctly. ", async () => {
  before(async () => {
    await GlobalPage.reloadTheSession();
    await browser.url(homeUrl);
  });
  it("Add first product from the homepage to the shopping cart.", async () => {
    await ShoppingCart.AddProductToCartFromHomepageAndOpenIt();
  });
  it("Click delete product from the shopping cart and verify it has been removed.", async () => {
    await ShoppingCart.DeleteProduct();
  });
});
