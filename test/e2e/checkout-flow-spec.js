'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/somastreat/m/5VKa/';

describe('Pre-Click Test Group', function() {
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
    expect(page.bodyNode.getAttribute('class')).toBe("md-mode");

  });

});

describe('onPopup Group', function() {
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
  });

  it('should have the correct information in the footer', function () {
  });

  it('should have the option to select a ticket type', function () {
    expect(page.ticketTypes.list.count()).toBeGreaterThan(0);
  });

  it('should have the default ticket type option selected', function () {
    expect(page.ticketTypes.selected.getText()).toContain("General Admission $50");
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
    page.ticketTypes.list.get(1).click();

    browser.sleep(2000);
    expect(page.availableTimeslots.list.get(3).element(by.css(".time")).getText()).toBe("11:00AM");
    expect(page.availableTimeslots.list.get(3).element(by.css(".js-tickets-left")).getText()).toBe("");
  });

  it('should display 1 option by default', function () {
    // expect(page.availableTimeslots.list.count()).toBe(6);
    expect(page.availableTimeslots.list.get(3).getCssValue('display')).toBe("list-item");
    expect(page.availableTimeslots.list.get(3).element(by.css(".time")).getText()).toBe("11:00AM");
    expect(page.availableTimeslots.list.get(3).element(by.css(".js-tickets-left")).getText()).toBe("");
  });

  it('should display 3 sold out options that are sold out when you select "Early-Bird General Admission $40"', function () {
    browser.sleep(2000);
    page.ticketTypes.selected.click();

    browser.sleep(2000);
    page.ticketTypes.list.get(0).click();

    expect(page.availableTimeslots.list.get(0).getCssValue('display')).toBe("list-item");
    expect(page.availableTimeslots.list.get(0).element(by.css(".time")).getText()).toBe("11:00AM");
    expect(page.availableTimeslots.list.get(0).element(by.css(".js-tickets-left")).getText()).toBe("Sold Out");
    expect(page.availableTimeslots.list.get(0).getAttribute('class')).toMatch("sold-out");

    expect(page.availableTimeslots.list.get(1).getCssValue('display')).toBe("list-item");
    expect(page.availableTimeslots.list.get(1).element(by.css(".time")).getText()).toBe("1:15PM");
    expect(page.availableTimeslots.list.get(1).element(by.css(".js-tickets-left")).getText()).toBe("Sold Out");
    expect(page.availableTimeslots.list.get(1).getAttribute('class')).toMatch("sold-out");

    expect(page.availableTimeslots.list.get(2).getCssValue('display')).toBe("list-item");
    expect(page.availableTimeslots.list.get(2).element(by.css(".time")).getText()).toBe("4:30PM");
    expect(page.availableTimeslots.list.get(2).element(by.css(".js-tickets-left")).getText()).toBe("Sold Out");
    expect(page.availableTimeslots.list.get(2).getAttribute('class')).toMatch("sold-out");
  });

  it('should have a switch option for the crab promo page', function () {
  });

  it('should toggle properly when we click the Sake Pairings option', function () {
  });

  //// testing the calculator

  it('should display $40 for a single ticket using the default option ', function () {
  });

  it('should display $40 for a single ticket using the default option ', function () {
  });

//  it('should display $80 for 2 tickets using the default option ', function () {
//  });

  it('should add the cost of Sake Pairing to the subtotal when we toggle the switch on', function () {
  });

  it('should remove the cost of Sake Pairing to the subtotal when we toggle the switch off', function () {
  });


  /*
   it('should blahbity when it blahs', function () {
   });
   */

});