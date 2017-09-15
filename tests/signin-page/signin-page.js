function SigninPage() {
    this.signinForm = element(by.name('signinForm'));
    this.signinFormTitle = element(by.xpath('//form[@name="signinForm"]/p'));
    this.signinEmailField = element(by.id('username'));
    this.signinPasswordField = element(by.id('password'));
    this.signinButton = element(by.xpath('//form[@name="signinForm"]/button'));
    this.signinForgotPasswordLink = element(by.xpath('//div[@class="links"]//a'));
    this.signinReqiuredEmailError = element(by.xpath('//form[@name="signinForm"]/div[@class="form-group"][1]/div/span[1]'));
    this.signinIncorrectEmailError = element(by.xpath('//form[@name="signinForm"]/div[@class="form-group"][1]/div/span[2]'));
    this.signinReqiuredPasswordError = element(by.xpath('//form[@name="signinForm"]/div[@class="form-group"][2]/div/span[1]'));
    this.signinIncorrectPasswordError = element(by.xpath('//form[@name="signinForm"]/div[@class="form-group"][2]/div/span[2]'));
    this.signinFailedAlert = element(by.xpath('//div[@ng-controller="AlertsCtrl"]/div/div/span[1]'));
    this.signinFailedErrorCodeAlert = element(by.xpath('//div[@ng-controller="AlertsCtrl"]/div/div/span[2]'));
}

module.exports = SigninPage;
