'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/hannibal/m/msCZ/';

describe('Ticket Selection: Multi Options:', function() {

    describe('Early Bird Selection', function() {
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
            expect(page.ticketTypes.selected.arrow.getCssValue("display")).toBe("block");
        });

        it('should have the default ticket type option selected', function () {
            expect(page.ticketTypes.selected.name.getText()).toBe("Early-Bird General Admission");
            expect(page.ticketTypes.selected.price.getText()).toBe("40");
            expect(page.ticketTypes.selected.details.getText()).toContain("Includes all-you-can-eat local Dungeness crab");
        });

        it('should have the option to select the initial number of tickets', function () {
            expect(page.numberOfTickets.hasSelector.isPresent()).toBe(true);
        });

        it('should have the start with the default number of tickets (2)', function () {
            expect(page.numberOfTickets.amount.getText()).toBe('2');
        });

        it('should be able to change the number of tickets', function () {
            page.numberOfTickets.incrementBtn.get(0).click();
            browser.sleep(2000);

            expect(page.numberOfTickets.amount.getText()).toBe('3');

            page.numberOfTickets.incrementBtn.click();
            browser.sleep(2000);

            expect(page.numberOfTickets.amount.getText()).toBe('4');

            page.numberOfTickets.decrementBtn.click();
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
            page.numberOfTickets.decrementBtn.click();
            browser.sleep(2000);

            expect(page.numberOfTickets.decrementBtn.getAttribute('class')).toMatch('disabled');
            expect(page.numberOfTickets.incrementBtn.getAttribute('class')).not.toMatch('disabled');
        });

        it('should block increment whenever we are at 10 tickets"', function () {
            expect(page.numberOfTickets.incrementBtn.getAttribute('class')).not.toMatch('disabled');

            var i= 0, n=9;

            browser.sleep(2000);
            for (i; i<n; i++ ) {
                page.numberOfTickets.incrementBtn.get(0).click();
                browser.sleep(2000);
            }

            expect(page.numberOfTickets.amount.getText()).toBe('10');
            expect(page.numberOfTickets.incrementBtn.getAttribute('class')).toMatch('disabled');
        });

        it('should display the 11:00AM timeslot by default', function () {
            expect(page.availableTimeslots.list.get(0).getCssValue('display')).toBe("list-item");
            expect(page.availableTimeslots.list.get(0).element(by.css(".time")).getText()).toBe("11:00AM");
            expect(page.availableTimeslots.list.get(0).element(by.css(".js-tickets-left")).getText()).toBe("");
        });

        it('should have the option called "Admission with Unlimited Drinks" set to "sold out" and not clickable', function () {
            page.ticketTypes.selected.box.click();
            browser.sleep(2000);

            expect(page.ticketTypes.list.get(2).getAttribute('class')).toMatch("disabled");
        });

        it('should display correctly for 1 ticket using the default option ', function () {
            expect(page.lineItems.list.get(0).element(by.css('.label')).getText()).toContain("2 X");
            expect(page.lineItems.list.get(0).element(by.css('.value')).getText()).toBe("$80.00");
            expect(page.lineItems.list.get(1).element(by.css('.value')).getText()).toBe("$6.40");
            expect(page.lineItems.list.get(2).element(by.css('.value')).getText()).toBe("$86.40");
        });

        it('should display correctly for 2 tickets using the default option ', function () {
            page.numberOfTickets.incrementBtn.get(0).click();
            browser.sleep(2000);

            expect(page.lineItems.list.get(0).element(by.css('.label')).getText()).toContain("3 X");
            expect(page.lineItems.list.get(0).element(by.css('.value')).getText()).toBe("$120.00");
            expect(page.lineItems.list.get(1).element(by.css('.value')).getText()).toBe("$9.60");
            expect(page.lineItems.list.get(2).element(by.css('.value')).getText()).toBe("$129.60");
        });
    });

    describe('General Admission Selection', function() {
        var page;

        beforeEach(function(){
            browser.get(baseURL + baseEvent);
            page = new CheckoutModal();

            page.BuyTicketsButton.click();
            browser.sleep(2000);

            page.ticketTypes.selected.box.click();
            browser.sleep(2000);

            page.ticketTypes.list.get(1).click();
            browser.sleep(2000);
        });

        afterEach(function(){
            page = null;
        });


        it('should display the number of tickets left when there are less or equal to 10 tickets', function () {

            expect(page.availableTimeslots.list.get(2).element(by.css(".time")).getText()).toBe("2:00PM");
            expect(page.availableTimeslots.list.get(2).element(by.css(".js-tickets-left")).getText()).toBe("5 Tickets Left");
        });

        it('should display the 4:30PM timeslot as "Sold Out"', function () {
            expect(page.availableTimeslots.list.get(3).getCssValue('display')).toBe("list-item");
            expect(page.availableTimeslots.list.get(3).getAttribute('class')).toMatch("sold-out");
            expect(page.availableTimeslots.list.get(3).element(by.css(".time")).getText()).toBe("4:30PM");
            expect(page.availableTimeslots.list.get(3).element(by.css(".js-tickets-left")).getText()).toBe("Sold Out");
        });
    });



    //// testing the calculator
    describe('Child General Selection', function() {
        var page;

        beforeEach(function(){
            browser.get(baseURL + baseEvent);
            page = new CheckoutModal();

            page.BuyTicketsButton.click();
            browser.sleep(2000);

            page.ticketTypes.selected.box.click();
            browser.sleep(2000);

            page.ticketTypes.list.get(3).click();
            browser.sleep(2000);
        });

        afterEach(function(){
            page = null;
        });

        it('should have a switch option', function () {
            expect(page.optionsPicker.box.getCssValue('display')).toBe("block");
            expect(page.optionsPicker.title.getText()).toBe("Story time");
            expect(page.optionsPicker.description.getText()).toContain("read a selection from Gray's Anatomy");
        });

        it('should toggle the cost of "Story Time" to the subtotal when we toggle the switch on', function () {
            page.optionsPicker.switch.click();
            browser.sleep(2000);

            expect(page.lineItems.list.get(0).element(by.css('.label')).getText()).toContain("2 X");
            expect(page.lineItems.list.get(0).element(by.css('.value')).getText()).toBe("$60.00");

            expect(page.lineItems.list.get(1).element(by.css('.label')).getText()).toBe("2 X STORY TIME");
            expect(page.lineItems.list.get(1).element(by.css('.value')).getText()).toBe("$50.00");

            expect(page.lineItems.list.get(2).element(by.css('.value')).getText()).toBe("$8.80");

            expect(page.lineItems.list.get(3).element(by.css('.value')).getText()).toBe("$118.80");
        });
    });
});