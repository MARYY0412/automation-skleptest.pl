class NewsLetterForm {
  //getters submit button, name textfield, email textfield, info label.
  get InputNameRef() {
    return $("#es_txt_name");
  }
  get InputEmailRef() {
    return $("#es_txt_email");
  }
  get SubmitButtonRef() {
    return $("#es_txt_button");
  }
  get SpanInfoRef() {
    return $("#es_msg");
  }
  // get AlertErrorRef() {
  //     return $(#)
  // }
  //methods
  async InputNameSetValue(text: string) {
    const input: WebdriverIO.Element = await this.InputNameRef;
    await input.waitForDisplayed();
    await input.setValue(text);
  }
  async InputEmailSetValue(text: string) {
    const input: WebdriverIO.Element = await this.InputEmailRef;
    await input.waitForDisplayed();
    await input.setValue(text);
  }
  async SubmitButtonClick() {
    const button: WebdriverIO.Element = await this.SubmitButtonRef;
    await button.waitForDisplayed();
    await button.click();
  }
  async verifySpanInfo(text: string) {
    const span: WebdriverIO.Element = await this.SpanInfoRef;
    await span.waitForDisplayed();
    await expect(span).toHaveText(text);
  }
  async verifyInputsAreEmpty() {
    expect(await this.InputNameRef.getValue()).toEqual("");
    expect(await this.InputEmailRef.getValue()).toEqual("");
  }
  async setInputValuesEmpty() {
    await this.InputNameSetValue("");
    await this.InputNameSetValue("");
  }
}

export default new NewsLetterForm();
