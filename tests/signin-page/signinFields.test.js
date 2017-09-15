var SigninPage = require('./signin-page');
var constants = require('../constants');

describe ('Sign In fields validation', function() {
    var page;

    var expectedRequiredEmailErrorNotification = "this field is required.";
    var expectedEmailErrorNotification = "invalid email or phone number.";

    var expectedRequiredPasswordErrorNotification = "this field is required.";
    var expectedPasswordErrorNotification = "password cannot be less then 6 symbols length.";

    beforeAll(function() {
        page = new SigninPage();
    });

    beforeEach(function() {
        browser.get(constants.url.adminPanel);
    });

    it('Verify Email error messages are hidden by default', function () {
        expect(page.signinReqiuredEmailError.isDisplayed()).toBeFalsy();
        expect(page.signinIncorrectEmailError.isDisplayed()).toBeFalsy();
    });

    it('Verify Password error messages are hidden by default', function () {
        expect(page.signinReqiuredPasswordError.isDisplayed()).toBeFalsy();
        expect(page.signinIncorrectPasswordError.isDisplayed()).toBeFalsy();
    });


    it('Verify error notification displaying with empty password', function(){
        page.signinEmailField.sendKeys("test@test.com");
        page.signinPasswordField.sendKeys("");

        expect(page.signinReqiuredPasswordError.getText()).toEqual(expectedRequiredPasswordErrorNotification);
        expect(page.signinIncorrectPasswordError.getText()).toEqual(expectedPasswordErrorNotification);
    });

    it('Verify error notification displaying with empty password', function(){
        page.signinEmailField.sendKeys("");
        page.signinPasswordField.sendKeys("123456");

        expect(page.signinReqiuredEmailError.getText()).toEqual(expectedRequiredEmailErrorNotification);
        expect(page.signinIncorrectEmailError.getText()).toEqual(expectedEmailErrorNotification);
    });

    it('Verify Email/Phone number error message displaying when email without domain', function () {
        page.signinEmailField.sendKeys("test");
        page.signinPasswordField.sendKeys("123456");

        expect(page.signinIncorrectEmailError.getText()).toEqual(expectedEmailErrorNotification);
    });

    it('Verify Email/Phone number error message displaying when email with incorrect domain', function () {
        page.signinEmailField.sendKeys("test@test");
        page.signinPasswordField.sendKeys("123456");

        expect(page.signinIncorrectEmailError.getText()).toEqual(expectedEmailErrorNotification);
    });

    it('Verify Email/Phone number error message displaying when phone number without country code', function () {
        page.signinEmailField.sendKeys("1234567890");
        page.signinPasswordField.sendKeys("123456");

        expect(page.signinIncorrectEmailError.getText()).toEqual(expectedEmailErrorNotification);
    });

    it('Verify Email/Phone number error message displaying when phone number is incorrect', function () {
        page.signinEmailField.sendKeys("+123");
        page.signinPasswordField.sendKeys("123456");

        expect(page.signinIncorrectEmailError.getText()).toEqual(expectedEmailErrorNotification);
    });

    it('Verify Password error message displaying when phone number is incorrect', function () {
        page.signinEmailField.sendKeys("test@test.com");
        page.signinPasswordField.sendKeys("123");

        expect(page.signinIncorrectEmailError.getText()).toEqual(expectedPasswordErrorNotification);
    });
});

