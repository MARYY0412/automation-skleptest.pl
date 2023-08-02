import NewsletterForm from "../../components/NewsletterForm";
import NewsletterPhrases from "../../config/NewsletterPhrases";
import GlobalPage from "../../pages/GlobalPage";
import { homeUrl } from "../../config/PagesUrl";
describe("Testing newsletter form.", async () => {
  before(() => {
    browser.url(homeUrl);
  });

  // alertEmptyForm: "Fill the blanks",
  // alertNoEmail: "Please enter email address",
  // alertNoName: "Please enter name",
  // alertIncorrectEmail: "Incorrect email address",
  // alertIncorrectName: "Incorrect name",
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
  it("Should verify we can send form with incorrectEmail1 variable. Should popup an alert with text: 'alertIncorrectEmail' variable.", async () => {
    // incorrectEmail1: "testowygmail.com",
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail1);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectEmail
    );
  });
  //email without "."
  it("Should verify we can send form with incorrectEmail2 variable. Should popup an alert with text: 'alertIncorrectEmail' variable.", async () => {
    // incorrectEmail2: "testowy@gmailcom",
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail2);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectEmail
    );
  });
  //email with "@@"
  it("Should verify we can send form with incorrectEmail3 variable. Should popup an alert with text: 'alertIncorrectEmail' variable.", async () => {
    // incorrectEmail3: "testowy@@gmailcom",
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail3);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectEmail
    );
  });
  //email: "@gmail.com"
  it("Should verify we can send form with incorrectEmail4 variable. Should popup an alert with text: 'alertIncorrectEmail' variable.", async () => {
    // incorrectEmail4: "@gmail.com",
    await NewsletterForm.InputEmailSetValue(NewsletterPhrases.incorrectEmail4);
    await NewsletterForm.InputNameSetValue(NewsletterPhrases.correctName);
    await NewsletterForm.SubmitButtonClick();
    await GlobalPage.verifyCofnirmAlertText(
      NewsletterPhrases.alertIncorrectEmail
    );
  });
});
