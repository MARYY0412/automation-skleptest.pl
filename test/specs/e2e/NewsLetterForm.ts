import NewsLetterForm from "../../components/NewsLetterForm";
import NewsLetterPhrases from "../../config/NewsLetterPhrases";
import GlobalPage from "../../pages/GlobalPage";
import { homeUrl } from "../../config/PagesUrl";
describe("", async () => {
  //open homepage
  it("go to the homepage and verify the url address.", async () => {
    await GlobalPage.openPage(homeUrl, homeUrl);
  });
  //send empty form
  it("Send empty form and verify the alert is showed. The alert should have taxt like in: 'alertIncorrectEmail' variable", async () => {
    await NewsLetterForm.SubmitButtonClick();
    await expect(await browser.getAlertText()).toBe(
      NewsLetterPhrases.alertIncorrectEmail
    );
  });
  //send correct form
  it("Enter correct values to the form and click submit button. Info Span should have value like in 'spanInfoFormSend' variable.", async () => {
    await NewsLetterForm.InputEmailSetValue(NewsLetterPhrases.correctEmail);
    await NewsLetterForm.InputNameSetValue(NewsLetterPhrases.correctName);
    await NewsLetterForm.SubmitButtonClick();
    //check the communicate is correct
    await NewsLetterForm.verifySpanInfo(NewsLetterPhrases.spanInfoFormSend);
    //check inputs, are empty
    await NewsLetterForm.verifyInputsAreEmpty();
  });
  //send empty form
  //send form without name
});
