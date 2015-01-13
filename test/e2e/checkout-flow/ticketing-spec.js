'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/somastreat/m/5VKa/';

describe('Ticket Selection', function() {
    var page;

    beforeEach(function(){
        browser.get(baseURL + baseEvent);
        page = new CheckoutModal();
        page.BuyTicketsButton.click();
    });

    afterEach(function(){
        page = null;
    });

    it('should have the correct information in the header', function () {
        expect(page.headerBlock.photo.getAttribute('src')).toMatch("bf1a8540e0d6f993c5a281a0eb2f4d7f.jpg");
        expect(page.headerBlock.title.getText()).toBe("2nd Annual All-You-Can-Eat Crab & Food Truck Feast");
        expect(page.headerBlock.where.getText()).toBe("SoMa StrEat Food Park");
        expect(page.headerBlock.when.getText()).toBe("Fri, Jan 30");
    });

    it('should have the correct information in the footer', function () {
    });

    it('should have the option to select a ticket type', function () {
        expect(page.ticketTypes.list.count()).toBeGreaterThan(0);
    });

    it('should have the default ticket type option selected', function () {
        expect(page.ticketTypes.selected.getText()).toContain("General Admission $40");
        expect(page.ticketTypes.selected.getText()).toContain("Includes all-you-can-eat local Dungeness crab");
    });

    it('should have the option to select the initial number of tickets', function () {
        expect(page.numberOfTickets.hasSelector.isPresent()).toBe(true);
    });

    it('should have the start with the default number of tickets', function () {
        expect(page.numberOfTickets.amount.getText()).toBe('1');
    });

    it('should be able to change the number of tickets', function () {
        browser.sleep(2000);
        page.numberOfTickets.incrementBtn.get(0).click();
        expect(page.numberOfTickets.amount.getText()).toBe('2');

        browser.sleep(2000);
        page.numberOfTickets.incrementBtn.click();
        expect(page.numberOfTickets.amount.getText()).toBe('3');

        browser.sleep(2000);
        page.numberOfTickets.decrementBtn.click();
        expect(page.numberOfTickets.amount.getText()).toBe('2');

        browser.sleep(2000);
        page.numberOfTickets.decrementBtn.click();
        expect(page.numberOfTickets.amount.getText()).toBe('1');

    });

    it('should block decrement whenever we are at 1 ticket"', function () {
        expect(page.numberOfTickets.decrementBtn.getAttribute('class')).toMatch('disabled');

        browser.sleep(2000);
        page.numberOfTickets.incrementBtn.get(0).click();

        expect(page.numberOfTickets.decrementBtn.getAttribute('class')).not.toMatch('disabled');
    });

    it('should block increment whenever we are at 10 tickets"', function () {
        expect(page.numberOfTickets.incrementBtn.getAttribute('class')).not.toMatch('disabled');

        var i= 0, n=10;

        for (i; i<n; i++ ) {
            browser.sleep(2000);
            page.numberOfTickets.incrementBtn.get(0).click();
        }

        expect(page.numberOfTickets.amount.getText()).toBe('10');
        expect(page.numberOfTickets.incrementBtn.getAttribute('class')).toMatch('disabled');
    });

    it('should display the number of tickets left when there are less or equal to 10 tickets', function () {
        browser.sleep(2000);
        page.ticketTypes.selected.click();

        browser.sleep(2000);
        page.ticketTypes.list.get(2).click();

        browser.sleep(2000);
        expect(page.availableTimeslots.list.get(4).element(by.css(".time")).getText()).toBe("11:00AM");
        expect(page.availableTimeslots.list.get(4).element(by.css(".js-tickets-left")).getText()).toBe("");
    });

    it('should display the 11:00AM timeslot by default', function () {
        expect(page.availableTimeslots.list.get(0).getCssValue('display')).toBe("list-item");
        expect(page.availableTimeslots.list.get(0).element(by.css(".time")).getText()).toBe("11:00AM");
        expect(page.availableTimeslots.list.get(0).element(by.css(".js-tickets-left")).getText()).toBe("");
    });

    it('should display the 4:30PM timeslot as "Sold Out"', function () {
        expect(page.availableTimeslots.list.get(2).getCssValue('display')).toBe("list-item");
        expect(page.availableTimeslots.list.get(2).getAttribute('class')).toMatch("sold-out");
        expect(page.availableTimeslots.list.get(2).element(by.css(".time")).getText()).toBe("4:30PM");
        expect(page.availableTimeslots.list.get(2).element(by.css(".js-tickets-left")).getText()).toBe("Sold Out");
    });

    it('"Early-Bird General Admission $40" should be sold out and not clickable', function () {
        browser.sleep(2000);
        page.ticketTypes.selected.click();

        expect(page.availableTimeslots.list.get(2).getAttribute('class')).toMatch("sold-out");
    });

    //// testing the calculator

    it('should display correctly for 1 ticket using the default option ', function () {
        browser.sleep(2000);
        expect(page.lineItems.ticketAmount.getText()).toContain("1 X");
        expect(page.lineItems.ticketCost.getText()).toBe("$40.00");
        expect(page.lineItems.taxAndTip.getText()).toBe("$35.20");
        expect(page.lineItems.total.getText()).toBe("$75.20");
    });

    it('should display correctly for 2 tickets using the default option ', function () {
        browser.sleep(2000);
        page.numberOfTickets.incrementBtn.get(0).click();

        browser.sleep(2000);
        expect(page.lineItems.ticketAmount.getText()).toContain("2 X");
        expect(page.lineItems.ticketCost.getText()).toBe("$80.00");
        expect(page.lineItems.taxAndTip.getText()).toBe("$70.40");
        expect(page.lineItems.total.getText()).toBe("$150.40");
    });

    /*
     it('should have a switch option for the crab promo page', function () {
     });
     *//*


     */
    /*
     it('should toggle properly when we click the Sake Pairings option', function () {
     });
     */

    /*
     it('should add the cost of Sake Pairing to the subtotal when we toggle the switch on', function () {
     });
     */

    /*
     it('should remove the cost of Sake Pairing to the subtotal when we toggle the switch off', function () {
     });
     */

});