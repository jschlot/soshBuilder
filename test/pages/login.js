'use strict';

var LoginPage = function () {
    this.titleTag =  browser.getTitle();

    this.login = {};
    this.login.box = element(by.id("email-login-section"));
    this.login.emailLink = element(by.css("#sosh-login .login-sub-text #use-email"));
    this.login.username = element(by.css('input[name=username]'));
    this.login.password = element(by.css('input[name=password]'));
    this.login.button = element(by.id('email-login-button'));

    this.doLogin = function() {
        this.login.emailLink.click();
        browser.sleep(2000);

        this.login.username.sendKeys("jack@offlinelabs.com");
        this.login.password.sendKeys("linoleum");

        this.login.button.click();
        browser.sleep(2000);
    };
};

module.exports = LoginPage;