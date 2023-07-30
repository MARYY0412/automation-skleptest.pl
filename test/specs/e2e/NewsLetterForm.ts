import NewsletterForm from "../../components/NewsletterForm";
import NewsletterPhrases from "../../config/NewsletterPhrases";
import GlobalPage from "../../pages/GlobalPage";
import { homeUrl } from "../../config/PagesUrl";
describe("", async () => {
  //open homepage
  it("go to the homepage and verify the url address.", async () => {
    await GlobalPage.openPage(homeUrl, homeUrl);
  });
  //id = 3
  //send correct form
  it("Send correct form. Info Span should have the text like 'spanInfoFormSend' variable.", async () => {
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.correctEmail);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    //check the communicate is correct
    await NewsletterForm.verifySpanInfo(NewsletterPhrases.spanInfoFormSend);
    //check inputs, are empty
    // await NewsletterForm.verifyInputsAreEmpty();
  });
  //id = 4
  //send empty form
  it("Send empty form. The alert should be opened and have the text like 'alertIncorrectEmail' variable.", async () => {
    await NewsletterForm.InputEmailSetValue("");
    await NewsletterForm.InputNameSetValue("");
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectEmail
    );
    //check inputs, are empty
    // await NewsletterForm.verifyInputsAreEmpty();
  });
  //id = 5
  //send form without email
  it("Send the form without email. The alert should be opened and have the text like 'alertIncorrectEmail' variable.", async () => {
    await NewsletterForm.InputEmailSetValue("");
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectEmail
    );
    //check inputs, are empty
    // await NewsletterForm.verifyInputsAreEmpty();
  });
  //id = 6
  // send form without name
  it("Send the form without name. The alert should be opened and have the text like 'alertIncorrectEmail' variable.", async () => {
    // await NewsletterForm.InputEmailSetValue(NewsletterPhrases.correctEmail);
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.correctEmail);
    await NewsletterForm.InputNameSetValue("");
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectName
    );
  });
  //id = 7
  //send form with incorrect emails.
  it("Should verify we can send form with incorrectEmail1 variable. The alert should be opened and have text like 'alertIncorrectEmail' variable.", async () => {
    // incorrectEmail1: "testowygmail.com",
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail1);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectName
    );
  });
  it("Should verify we can send form with incorrectEmail2 variable. The alert should be opened and have text like 'alertIncorrectEmail' variable.", async () => {
    // incorrectEmail2: "testowy@gmailcom",
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail2);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectName
    );
  });
  it("Should verify we can send form with incorrectEmail3 variable. The alert should be opened and have text like 'alertIncorrectEmail' variable.", async () => {
    // incorrectEmail3: "testowy@@gmailcom",
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail3);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectName
    );
  });
  it("Should verify we can send form with incorrectEmail4 variable. The alert should be opened and have text like 'alertIncorrectEmail' variable.", async () => {
    // incorrectEmail4: "@gmail.com",
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail4);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectName
    );
  });
});
