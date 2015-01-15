'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/hannibal/m/msCZ/?promo_type=marketplace_promo&ref=new_homepage_promo&content_type=3';

describe('Init Spec:', function() {
    var page;

    beforeEach(function(){
        browser.get(baseURL + baseEvent);
        page = new CheckoutModal();
    });

    afterEach(function(){
        page = null;
    });

    it('should open the checkout modal when you click "Buy Tickets"', function () {
        expect(page.bodyNode.getAttribute('class')).toBe("");
        page.BuyTicketsButton.click();
        browser.sleep(2000);

        expect(page.bodyNode.getAttribute('class')).toBe("md-mode");
    });

    it('should have the correct information in the header', function () {
        expect(page.bodyNode.getAttribute('class')).toBe("");
        page.BuyTicketsButton.click();
        browser.sleep(2000);

        expect(page.headerBlock.photo.getAttribute('src')).toMatch("56e78150f6a16d169b893135cce56bff.jpg");
        expect(page.headerBlock.title.getText()).toBe("All You Can Eat Tapas with Hannibal Lecter");
        expect(page.headerBlock.where.getText()).toBe("SoMa StrEat Food Park");
        expect(page.headerBlock.when.getText()).toBe("Sat, Feb 28");
    });

    it('should have the correct information in the footer', function () {
        expect(page.bodyNode.getAttribute('class')).toBe("");
        page.BuyTicketsButton.click();
        browser.sleep(2000);

        expect(page.footerBlock.securityStatement.getText()).toBe("Sosh is a secure site. Your details are safe.")
    });
});