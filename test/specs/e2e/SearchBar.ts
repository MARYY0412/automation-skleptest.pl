import { homeUrl } from "../../config/PagesUrl";
import { phrase1 } from "../../config/searchBarPhrases";
import GlobalPage from "../../pages/GlobalPage";
import SearchBarComponent from "../../components/SearchBarComponents";

describe("Homepage - searchbar", async () => {
  //id = 1
  it("Open the home page and verify the url address is correct. Check the search input is visible.", async () => {
    await GlobalPage.openPage(homeUrl, homeUrl);
    await SearchBarComponent.searchInputIsVisible();
  });
  //id = 2
  it("Click searchbar submit button, without entering any text to the textfield. In the end, check the url is correct.", async () => {
    await SearchBarComponent.searchBarButtonClick();
    await expect(browser).toHaveUrl(homeUrl + "?s=");
  });
  //id = 3
  it("Enter the following text to the textfield: 'Amari Shirt'. Check the results are correct.", async () => {
    await SearchBarComponent.searchInputSetValue(phrase1);
    await SearchBarComponent.searchBarButtonClick();
    await browser.pause(5000);
  });
});
