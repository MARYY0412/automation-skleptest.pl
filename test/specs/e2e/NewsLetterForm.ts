import NewsletterForm from "../../components/NewsletterForm";
import NewsletterPhrases from "../../config/NewsletterPhrases";
import GlobalPage from "../../pages/GlobalPage";
import { homeUrl } from "../../config/PagesUrl";
describe("", async () => {
  //open homepage
  it("go to the homepage and verify the url address.", async () => {
    await GlobalPage.openPage(homeUrl, homeUrl);
  });
  //send empty form
  it("Send empty form and verify the alert is showed. The alert should have taxt like in: 'alertIncorrectEmail' variable", async () => {
    await NewsletterForm.SubmitButtonClick();
    await expect(await browser.getAlertText()).toBe(
      NewsletterPhrases.alertIncorrectEmail
    );
  });
  //send correct form
  it("Enter correct values to the form and click submit button. Info Span should have value like in 'spanInfoFormSend' variable.", async () => {
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.correctEmail);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    //check the communicate is correct
    await NewsletterForm.verifySpanInfo(NewsletterPhrases.spanInfoFormSend);
    //check inputs, are empty
    await NewsletterForm.verifyInputsAreEmpty();
  });
  //send empty form
  //send form without name
});
