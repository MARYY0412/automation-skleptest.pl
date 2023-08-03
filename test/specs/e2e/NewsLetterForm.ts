import NewsletterForm from "../../components/NewsletterForm";
import NewsletterPhrases from "../../config/NewsletterPhrases";
import GlobalPage from "../../pages/GlobalPage";
import { homeUrl } from "../../config/PagesUrl";
describe("Testing newsletter form.", async () => {
  before(() => {
    browser.url(homeUrl);
  });
  //id = 3
  //send correct form
  it("Send correct form. Info Span should have the text like 'spanInfoFormSend' variable.", async () => {
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.correctEmail);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    //check the communicate is correct
    await NewsletterForm.verifySpanInfo(NewsletterPhrases.spanInfoFormSend);
    //check inputs are empty
  });
  //id = 4
  //send empty form
  it("Send empty form. Should popup an alert with text: 'alertEmptyForm' variable", async () => {
    await NewsletterForm.InputEmailSetValue("");
    await NewsletterForm.InputNameSetValue("");
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(NewsletterPhrases.alertEmptyForm);
  });
  //id = 5
  //send form without email
  it("Send the form without email. Should popup an alert with text: 'alertNoEmail' variable", async () => {
    await NewsletterForm.InputEmailSetValue("");
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(NewsletterPhrases.alertNoEmail);
    //check inputs, are empty
    // await NewsletterForm.verifyInputsAreEmpty();
  });
  //id = 6
  // send form without name
  it("Send the form without name. Should popup an alert with text: 'alertNoName' variable.", async () => {
    // await NewsletterForm.InputEmailSetValue(NewsletterPhrases.correctEmail);
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.correctEmail);
    await NewsletterForm.InputNameSetValue("");
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(NewsletterPhrases.alertNoName);
  });
  //id = 7
  //send form with incorrect emails.
  //email without "@"
  it("Send form with incorrectEmail1 variable(email: testowygmail.com). Should popup an alert with text: 'alertIncorrectEmail' variable.", async () => {
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail1);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectEmail
    );
  });
  //email without "."
  it("Send form with incorrectEmail2 variable(email: testowy@gmailcom). Should popup an alert with text: 'alertIncorrectEmail' variable.", async () => {
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail2);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectEmail
    );
  });
  //email with "@@"
  it("Send form with incorrectEmail3 variable(email: testowy@@gmailcom). Should popup an alert with text: 'alertIncorrectEmail' variable.", async () => {
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail3);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectEmail
    );
  });
  //email: "@gmail.com"
  it("Send form with incorrectEmail4 variable(email: @gmail.com). Should popup an alert with text: 'alertIncorrectEmail' variable.", async () => {
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail4);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectEmail
    );
  });
  //id = 8
  //name: "mm" - too short
  it("Send the form with 'incorrectName' variable(too short). Should popup an alert with text: 'alertIncorrectName' variable.", async () => {
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.correctEmail);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.incorrectName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectName
    );
  });
  //name: "morethantwentyoneletters" - too long
  it("Send the form with 'incorrectName2' variable(too long). Should popup an alert with text: 'alertIncorrectName' variable.", async () => {
    //case 1:name: "mm" - too short
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.correctEmail);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.incorrectName2);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectName
    );
  });
});
