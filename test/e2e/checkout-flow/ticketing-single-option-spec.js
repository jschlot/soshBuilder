'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/deepdiveart/m/dL3z/';

describe('Ticket Selection:', function() {
    var page;

    beforeEach(function () {
        browser.get(baseURL + baseEvent);
        page = new CheckoutModal();

        page.BuyTicketsButton.click();
        browser.sleep(2000);
    });

    afterEach(function () {
        page = null;
    });

    it('should not display the "chevron" in the drop down list when there is only one option to select', function () {
        expect(page.ticketTypes.list.count()).toBe(1);

        // ToDo verify chevron is hidden (it's not hidden right now)
        expect(false).toBe(true);

    });

});