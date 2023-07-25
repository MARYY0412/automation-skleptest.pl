import { homeUrl } from "../../config/PagesUrl";
import GlobalPage from "../../pages/GlobalPage";

describe("Homepage - searchbar", async () => {
  it("open the home page and verify the url address is correct", async () => {
    await GlobalPage.openPage(homeUrl, homeUrl);
  });
});
