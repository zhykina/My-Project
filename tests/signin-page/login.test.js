var SigninPage = require('./signin-page');
var constants = require('../constants');
var UsersPage = require('../users-page/users-page');

describe ('Sign In Page verification', function() {
    var page;

    beforeAll(function () {
        page = new SigninPage();
    });

    beforeEach(function () {
        browser.get(constants.url.adminPanel);
    });

    it('Verify success Admin user login', function () {
        var usersPage;

        page.signinEmailField.sendKeys("olesya.kotsyba@gmail.com");
        page.signinPasswordField.sendKeys("123123");
        page.signinButton.click();

        usersPage = new UsersPage();

        expect(usersPage.usersBreadcrumbsUsers.isDisplayed()).toBeTruthy();
    });

    it('Verify success Super Admin user login', function () {
        var usersPage;

        page.signinEmailField.sendKeys("upgraded.dev@yahoo.com");
        page.signinPasswordField.sendKeys("123123");
        page.signinButton.click();

        usersPage = new UsersPage();

        expect(usersPage.usersBreadcrumbsUsers.isDisplayed()).toBeTruthy();
    });

    it('Verify failed login by non-existing user', function () {
        var failedAlertText = "Provided user is not found.";
        var failedErrorCode = "Error code is \"usr04\".";

        page.signinEmailField.sendKeys("test@test.com");
        page.signinPasswordField.sendKeys("123123");
        page.signinButton.click();

        expect(page.signinFailedAlert.getText()).toEqual(failedAlertText);
        expect(page.signinFailedErrorCodeAlert.getText()).toEqual(failedErrorCode);
    })
});
