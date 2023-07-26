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
    input.setValue(text);
  }
  async InputEmailSetValue(text: string) {
    const input: WebdriverIO.Element = await this.InputEmailRef;
    input.setValue(text);
  }
  async SubmitButtonClick() {
    const button: WebdriverIO.Element = await this.SubmitButtonRef;
    button.click();
  }
  async verifySpanInfo(text: string) {
    const info: WebdriverIO.Element = await this.SpanInfoRef;
    await expect(info).toHaveText(text);
  }
  async verifyInputsAreEmpty() {
    // const inputName = await this.InputNameRef;
    // const inputEmail = await this.InputEmailRef;
    // await expect(inputName).toHaveText("");
    // await expect(inputEmail).toHaveText("");
    expect(await this.InputNameRef.getValue()).toEqual("");
    expect(await this.InputEmailRef.getValue()).toEqual("");
  }
  async setInputValuesEmpty() {
    await this.InputNameSetValue("");
    await this.InputNameSetValue("");
  }
}

export default new NewsLetterForm();
