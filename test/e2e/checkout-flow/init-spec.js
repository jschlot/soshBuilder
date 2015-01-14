'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/somastreat/m/5VKa/?promo_type=marketplace_promo&ref=new_homepage_promo&content_type=3';

describe('Init Spec:', function() {
    var page;

    beforeEach(function(){
        browser.get(baseURL + baseEvent);
        page = new CheckoutModal();
    });

    afterEach(function(){
        page = null;
    });

    it('should carry over the ref code from the buy flow', function () {
        // ToDo - verify ref passed over, not sure how to test this
        expect(false).toBe(true);
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

        expect(page.headerBlock.photo.getAttribute('src')).toMatch("bf1a8540e0d6f993c5a281a0eb2f4d7f.jpg");
        expect(page.headerBlock.title.getText()).toBe("2nd Annual All-You-Can-Eat Crab & Food Truck Feast");
        expect(page.headerBlock.where.getText()).toBe("SoMa StrEat Food Park");
        expect(page.headerBlock.when.getText()).toBe("Fri, Jan 30");
    });

    it('should have the correct information in the footer', function () {
        expect(page.bodyNode.getAttribute('class')).toBe("");
        page.BuyTicketsButton.click();
        browser.sleep(2000);

        expect(page.footerBlock.securityStatement.getText()).toBe("Sosh is a secure site. Your details are safe.")
    });
});