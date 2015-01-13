'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/somastreat/m/5VKa/';
/*

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

*/
/*
  it('"Early-Bird General Admission $40" should be sold out and not clickable', function () {
    browser.sleep(2000);
    page.ticketTypes.selected.click();

    expect(page.availableTimeslots.list.get(0).getAttribute('class')).toMatch("sold-out");
  });
*//*


*/
/*
  it('should have a switch option for the crab promo page', function () {
  });
*//*


*/
/*
  it('should toggle properly when we click the Sake Pairings option', function () {
  });
*//*


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

*/
/*
  it('should add the cost of Sake Pairing to the subtotal when we toggle the switch on', function () {
  });
*//*


*/
/*
  it('should remove the cost of Sake Pairing to the subtotal when we toggle the switch off', function () {
  });
*//*

});
*/

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

  it('should show the updated, abbreviated payment info after "Save" button is clicked w/o errors', function () {
    page.paymentInfoForm.billing.name.sendKeys("Jack Schlotthauer");
    page.paymentInfoForm.billing.email.sendKeys("jack@sosh.com");
    page.paymentInfoForm.billing.phone.sendKeys("415 555-1234");
    page.paymentInfoForm.cc.cardNumber.sendKeys("378282246310005");
    page.paymentInfoForm.cc.expirationDate.sendKeys("12/16");
    page.paymentInfoForm.cc.securityCode.sendKeys("516");
    page.footerBlock.savePaymentButton.click();

    browser.sleep(2000);
    expect(page.views.ticketing.getCssValue('display')).toBe("block");
    expect(page.views.payment.getCssValue('display')).toBe("none");
    expect(page.views.success.getCssValue('display')).toBe("none");

    expect(page.paymentRecap.name.getText()).toBe("Jack Schlotthauer");
    expect(page.paymentRecap.email.getText()).toBe("jack@sosh.com");
    expect(page.paymentRecap.phone.getText()).toBe("415 555-1234");
    expect(page.paymentRecap.payment.getText()).toBe("AMERICAN EXPRESS xxx-0005");

  });

  it('should show the promo link after "Save" button is clicked w/o errors; clicking the link reveals the input box', function () {
    page.paymentInfoForm.billing.name.sendKeys("Jack Schlotthauer");
    page.paymentInfoForm.billing.email.sendKeys("jack@sosh.com");
    page.paymentInfoForm.billing.phone.sendKeys("415 555-1234");
    page.paymentInfoForm.cc.cardNumber.sendKeys("378282246310005");
    page.paymentInfoForm.cc.expirationDate.sendKeys("12/16");
    page.paymentInfoForm.cc.securityCode.sendKeys("516");

    page.footerBlock.savePaymentButton.click();
    browser.sleep(2000);

    expect(page.paymentRecap.savePaymentButton.getCssValue("display")).toBe("block");
    expect(page.paymentRecap.promoBox.getCssValue("display")).toBe("none");

    page.paymentRecap.promoButton.click();
    browser.sleep(2000);

    expect(page.paymentRecap.savePaymentButton.getCssValue("display")).toBe("none");
    expect(page.paymentRecap.promoBox.getCssValue("display")).toBe("block");

  });

  it('should show the promo input field after the "promo" button is clicked', function () {
  });

  it('should an error if the promo code is invalid', function () {
  });

  it('should show the purchase complete page after entering everything in and hitting "complete purchase"', function () {
  });


  /*
   it('should blahbity when it blahs', function () {
   });
   */

});