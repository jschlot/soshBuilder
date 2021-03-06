'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../../pages/checkoutflow.js'),
    baseEvent = '/san-francisco/marketplace/hannibal/m/msCZ/';

describe('Purchase Spec:', function() {
    var page;

    beforeEach(function(){
        browser.get(baseEvent);
        page = new CheckoutModal();
        page.BuyTicketsButton.click();
        browser.sleep(2000);
        page.footerBlock.addPaymentButton.get(0).click();
        browser.sleep(2000);

        page.paymentInfoForm.billing.name.sendKeys("Jack Schlotthauer");
        page.paymentInfoForm.billing.email.sendKeys("jack@sosh.com");
        page.paymentInfoForm.billing.phone.sendKeys("415 555-1234");
        page.paymentInfoForm.cc.cardNumber.sendKeys("378282246310005");
        page.paymentInfoForm.cc.expirationDate.sendKeys("12/16");
        page.paymentInfoForm.cc.securityCode.sendKeys("516");

        page.footerBlock.savePaymentButton.click();
        browser.sleep(2000);
    });

    afterEach(function(){
        page = null;
    });

   it('should show the updated, abbreviated payment info after "Save" button is clicked w/o errors', function () {
        expect(page.views.ticketing.getCssValue('display')).toBe("block");
        expect(page.views.payment.getCssValue('display')).toBe("none");
        expect(page.views.success.getCssValue('display')).toBe("none");

        expect(page.paymentRecap.name.getText()).toBe("Jack Schlotthauer");
        expect(page.paymentRecap.email.getText()).toBe("jack@sosh.com");
        expect(page.paymentRecap.phone.getText()).toBe("415 555-1234");
        expect(page.paymentRecap.payment.getText()).toBe("AMERICAN EXPRESS xxx-0005");
    });


    it('should show the promo link after "Save" button is clicked w/o errors; clicking the link reveals the input box', function () {
        expect(page.paymentRecap.promoButton.getCssValue("display")).toBe("inline");
        expect(page.paymentRecap.promoBox.getCssValue("display")).toBe("none");

        page.paymentRecap.promoButton.click();
        browser.sleep(2000);

        expect(page.paymentRecap.promoButton.getCssValue("display")).toBe("none");
        expect(page.paymentRecap.promoBox.getCssValue("display")).toBe("block");
    });

    it('should an error if the promo code is invalid', function () {
        page.paymentRecap.promoButton.click();
        browser.sleep(2000);

        page.paymentRecap.promoCodeInput.sendKeys("badpromocode");

        page.paymentRecap.promoCodeButton.click();
        browser.sleep(2000);

        expect(page.paymentRecap.promoCodeError.getText()).toBe("The promo code you entered does not exist. Sorry!");
    });

    it('should a promo code success message if the promo code is valid', function () {
        page.paymentRecap.promoButton.click();
        browser.sleep(2000);

        page.paymentRecap.promoCodeInput.sendKeys("cannibal");

        page.paymentRecap.promoCodeButton.click();
        browser.sleep(2000);

        expect(page.paymentRecap.promoCodeSuccess.getText()).toBe("Promo code successfully applied.");
    });

    it('should show the purchase complete view after entering everything in and hitting "complete purchase"', function () {
        page.footerBlock.completePurchase.click();
        browser.sleep(2000);

        expect(page.views.ticketing.getCssValue('display')).toBe("none");
        expect(page.views.payment.getCssValue('display')).toBe("none");
        expect(page.views.success.getCssValue('display')).toBe("block");

        expect(page.successView.time.getText()).toBe("11 am");
        expect(page.successView.cardEnding.getText()).toBe("0005");
        expect(page.successView.cardCharge.getText()).toBe("$86.40");
        expect(page.successView.confirmationEmail.getText()).toBe("jack@sosh.com");
    });
});