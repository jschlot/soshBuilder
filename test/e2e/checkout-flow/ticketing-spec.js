'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/somastreat/m/5VKa/';

describe('Ticket Selection: Single Option:', function() {
    var page;

    beforeEach(function(){
        browser.get(baseURL + baseEvent);
        page = new CheckoutModal();

        page.BuyTicketsButton.click();
        browser.sleep(2000);
    });

    afterEach(function(){
        page = null;
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
        page.numberOfTickets.incrementBtn.get(0).click();
        browser.sleep(2000);

        expect(page.numberOfTickets.amount.getText()).toBe('2');

        page.numberOfTickets.incrementBtn.click();
        browser.sleep(2000);

        expect(page.numberOfTickets.amount.getText()).toBe('3');

        page.numberOfTickets.decrementBtn.click();
        browser.sleep(2000);

        expect(page.numberOfTickets.amount.getText()).toBe('2');

        page.numberOfTickets.decrementBtn.click();
        browser.sleep(2000);

        expect(page.numberOfTickets.amount.getText()).toBe('1');
    });

    it('should block decrement whenever we are at 1 ticket"', function () {
        expect(page.numberOfTickets.decrementBtn.getAttribute('class')).toMatch('disabled');

        page.numberOfTickets.incrementBtn.get(0).click();
        browser.sleep(2000);

        expect(page.numberOfTickets.decrementBtn.getAttribute('class')).not.toMatch('disabled');
    });

    it('should block increment whenever we are at 10 tickets"', function () {
        expect(page.numberOfTickets.incrementBtn.getAttribute('class')).not.toMatch('disabled');

        var i= 0, n=10;

        browser.sleep(2000);
        for (i; i<n; i++ ) {
            page.numberOfTickets.incrementBtn.get(0).click();
            browser.sleep(2000);
        }

        expect(page.numberOfTickets.amount.getText()).toBe('10');
        expect(page.numberOfTickets.incrementBtn.getAttribute('class')).toMatch('disabled');
    });

    it('should display the number of tickets left when there are less or equal to 10 tickets', function () {
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
        page.ticketTypes.selected.click();
        browser.sleep(2000);

        expect(page.availableTimeslots.list.get(2).getAttribute('class')).toMatch("sold-out");
    });

    //// testing the calculator
    it('should display correctly for 1 ticket using the default option ', function () {
        expect(page.lineItems.list.get(0).element(by.css('.label')).getText()).toContain("1 X");
        expect(page.lineItems.list.get(0).element(by.css('.value')).getText()).toBe("$40.00");
        expect(page.lineItems.list.get(1).element(by.css('.value')).getText()).toBe("$35.20");
        expect(page.lineItems.list.get(2).element(by.css('.value')).getText()).toBe("$75.20");
    });

    it('should display correctly for 2 tickets using the default option ', function () {
        page.numberOfTickets.incrementBtn.get(0).click();
        browser.sleep(2000);

        expect(page.lineItems.list.get(0).element(by.css('.label')).getText()).toContain("2 X");
        expect(page.lineItems.list.get(0).element(by.css('.value')).getText()).toBe("$80.00");
        expect(page.lineItems.list.get(1).element(by.css('.value')).getText()).toBe("$70.40");
        expect(page.lineItems.list.get(2).element(by.css('.value')).getText()).toBe("$150.40");
    });

    it('should have a switch option for the crab promo page', function () {
         expect(page.optionsPicker.box.getCssValue('display')).toBe("block");
         expect(page.optionsPicker.title.getText()).toBe("Sake Pairing");
         expect(page.optionsPicker.description.getText()).toContain("six two-ounce pours of sake");
     });

    it('should toggle the cost of Sake Pairing to the subtotal when we toggle the switch on', function () {
         page.optionsPicker.switch.click();
         browser.sleep(2000);

         expect(page.lineItems.list.get(0).element(by.css('.label')).getText()).toContain("1 X");
         expect(page.lineItems.list.get(0).element(by.css('.value')).getText()).toBe("$40.00");

         expect(page.lineItems.list.get(1).element(by.css('.label')).getText()).toBe("1 X SAKE PAIRING");
         expect(page.lineItems.list.get(1).element(by.css('.value')).getText()).toBe("$190.00");

         expect(page.lineItems.list.get(2).element(by.css('.value')).getText()).toBe("$202.40");

         expect(page.lineItems.list.get(3).element(by.css('.value')).getText()).toBe("$432.40");
     });

});