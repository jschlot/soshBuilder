'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/somastreat/m/5VKa/';

describe('Payment Info', function() {
    var page;

    beforeEach(function(){
        browser.get(baseURL + baseEvent);
        page = new CheckoutModal();
        page.BuyTicketsButton.click();
        browser.sleep(2000);
        page.footerBlock.addPaymentButton.get(0).click();
        browser.sleep(2000);
    });

    afterEach(function(){
        page = null;
    });

    it('should toggle the payment info (PI) page when you click the "Add Payment Info" button and "cancel" link', function () {
        expect(page.views.ticketing.getCssValue('display')).toBe("none");
        expect(page.views.payment.getCssValue('display')).toBe("block");
        expect(page.views.success.getCssValue('display')).toBe("none");

        page.footerBlock.cancelPaymentButton.click();

        expect(page.views.ticketing.getCssValue('display')).toBe("block");
        expect(page.views.payment.getCssValue('display')).toBe("none");
        expect(page.views.success.getCssValue('display')).toBe("none");
    });

    it('should toggle an error when you click the "Save" button on the PI page and entered nothing', function () {
        page.footerBlock.savePaymentButton.click();
        expect(page.paymentInfoForm.cc.cardNumber.getAttribute('class')).toMatch('error');
        expect(page.paymentInfoForm.cc.expirationDate.getAttribute('class')).toMatch('error');
        expect(page.paymentInfoForm.cc.securityCode.getAttribute('class')).toMatch('error');
    });

    it('should display the visa credit card type when it is entered', function () {
        page.paymentInfoForm.cc.cardNumber.sendKeys("4242424242424242");
        page.paymentInfoForm.cc.cardNumber.sendKeys(protractor.Key.TAB);
        browser.sleep(2000);
        expect(page.paymentInfoForm.cc.cardNumber.getAttribute('class')).toMatch('visa');
    });

    it('should display the mastercard credit card type when it is entered', function () {
        page.paymentInfoForm.cc.cardNumber.sendKeys("5555555555554444");
        page.paymentInfoForm.cc.cardNumber.sendKeys(protractor.Key.TAB);
        browser.sleep(2000);
        expect(page.paymentInfoForm.cc.cardNumber.getAttribute('class')).toMatch('mastercard');
    });

    it('should display the amex credit card type when it is entered', function () {
        page.paymentInfoForm.cc.cardNumber.sendKeys("378282246310005");
        page.paymentInfoForm.cc.cardNumber.sendKeys(protractor.Key.TAB);
        browser.sleep(2000);
        expect(page.paymentInfoForm.cc.cardNumber.getAttribute('class')).toMatch('amex');
    });
});
