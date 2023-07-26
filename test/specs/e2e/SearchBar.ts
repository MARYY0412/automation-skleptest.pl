import { homeUrl } from "../../config/PagesUrl";
import { SBPhrase1 } from "../../config/SearchBarPhrases";
import GlobalPage from "../../pages/GlobalPage";
import SearchBar from "../../components/SearchBar";

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
    await SearchBar.searchInputSetValue(SBPhrase1);
    await SearchBar.searchBarButtonClick();
    await SearchBar.searchBarFindResult(SBPhrase1);
  });
  //id=4
  // it("", async () => {});
});
