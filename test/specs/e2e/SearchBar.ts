import { homeUrl } from "../../config/PagesUrl";
import { SBPhrase1 } from "../../config/SearchBarPhrases";
// import GlobalPage from "../../pages/GlobalPage";
import SearchBar from "../../components/SearchBar";

describe("Homepage - searchbar", async () => {
  before(() => {
    browser.url(homeUrl);
  });
  // id = 1
  it("Try to search an empty phrase. Should redirect to homeUrl + '?s=' link", async () => {
    await SearchBar.searchBarButtonClick();
    await expect(browser).toHaveUrl(homeUrl + "?s=");
  });
  // //id = 2
  it("Enter the following text to the textfield: 'Amari Shirt'.Check the result is correct.", async () => {
    await SearchBar.searchInputSetValue(SBPhrase1);
    await SearchBar.searchBarButtonClick();
    await SearchBar.searchBarFindResult(SBPhrase1);
  });
});
