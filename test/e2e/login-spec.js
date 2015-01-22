'use strict';

browser.ignoreSynchronization = true;
var LoginPage = require('../pages/login.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com/accounts/login/';

describe('Login Spec:', function() {
    var page;

    beforeEach(function(){
        browser.get(baseURL);
        page = new LoginPage();
    });

    afterEach(function(){
        page = null;
    });

    it('should have a page title that contains the word "Login"', function () {
        expect(page.titleTag).toContain("Login")
    });

    it('should have a link that triggers the display of login via email flow', function () {
        expect(page.login.box.getCssValue("display")).toBe("none");

        page.login.emailLink.click();
        browser.sleep(2000);

        expect(page.login.box.getCssValue("display")).toBe("block");
        expect(page.login.username.isPresent()).toBe(true);
        expect(page.login.password.isPresent()).toBe(true);
    });

    it('should login properly', function () {
        page.doLogin();

        // then the browser redirects to the logged-in home page
        expect(browser.getTitle()).toContain("Your Home");
    });
});