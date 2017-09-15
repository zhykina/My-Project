var SigninPage = require('./signin-page');
var constants = require('../constants');

describe ('Sign In Page verification', function() {
    var page; 

    beforeAll(function() {
        page = new SigninPage(); 
    });

    beforeEach(function() {
        browser.get(constants.url.adminPanel);
    });

    it('Verify Sign In form displaying', function(){
        expect(page.signinForm.isDisplayed()).toBeTruthy();
    });
    
    it('Verify Sign In Title is correct', function(){
        var expectedSigninTitle = 'use your email or phone number';

        expect(page.signinFormTitle.getText()).toEqual(expectedSigninTitle);
    });

    it('Verify watermark in email field', function(){
        var expectedEmailWatermark = 'email/phone';

        expect(page.signinEmailField.getAttribute('placeholder')).toEqual(expectedEmailWatermark);
    });

    it('Verify watermark in password field', function(){
        var expectedEmailWatermark = 'password';

        expect(page.signinPasswordField.getAttribute('placeholder')).toEqual(expectedEmailWatermark);
    });

    it('Verify sign in button displaying', function () {
        expect(page.signinButton.isDisplayed()).toBeTruthy();
    });
    
    it('Verify Forgot Password link displaying', function () {
        expect(page.signinForgotPasswordLink.isDisplayed()).toBeTruthy();
    });
});

