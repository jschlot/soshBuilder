'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/somastreat/m/5VKa/';

describe('Init', function() {
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

});