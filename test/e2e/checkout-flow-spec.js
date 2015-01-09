'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../pages/checkoutflow.js');

describe('Checkout Modal', function() {
  // core behaviour
  it('should handle the buy tickets click correctly', function () {
    var page;
    browser.get("http://tapir:chantek@ami.hippo.offlinelabs.com/san-francisco/marketplace/cocktail101winter/m/sH4z/");
    page = new CheckoutModal();

    expect(page.BuyTicketsButton.get(0).getAttribute('href')).toBe("http://tapir:chantek@ami.hippo.offlinelabs.com/san-francisco/ticketing/cocktail101winter/m/sH4z/");
    expect(page.BuyTicketsButton.get(0).getText()).toBe("Buy Tickets");
    page.BuyTicketsButton.click();
  });

  it('should display display the checkout flow modal correctly upon clicking buy tickets button', function () {
    var page;
    browser.get("http://tapir:chantek@ami.hippo.offlinelabs.com/san-francisco/ticketing/cocktail101winter/m/sH4z/");
    page = new CheckoutModal();

    expect(page.header.EventTitle.get(0).getText()).toBe("Cocktail Den's Secrets Revealed: Expert Pours 101");
    expect(page.EventLocation.get(0).getText()).toBe("Two Sisters Bar & Books");
    expect(page.EventTiming.get(0).getText()).toBe("Mon, Jan 26");
  })

  // it('should have the option to select ticket type', function () {

  // })

  // it('should have option to select number of tickets', function () {

  // })

  // it('should have option to select timings', function () {

  // })

  // it('should have option to switch on extra pairings if they exist', function () {

  // })

  // it('should update the price, tax and tip and total based on user selections', function () {

  // })

  // it('should update number of tickets available based on user selections', function () {

  // })

  // it('should disable the plus button if no tickets are available beyond a number', function () {

  // })

  // it('should disable the minus button after it reaches 0', function () {

  // })

  // it('should update with contact info input fields and credit card info input fields on clicking add payment info button', function () {

  // })

  // it('should include user name, email and phone number under contact info and auto populate for signed in users', function () {

  // })


  // it('should include input field for credit card number, security code and expiration date and auto populate if it already exists', function () {

  // })

  // it('should update the credit card type (eg:visa, mastercard, amex etc) upon entering the credit card number', function () {

  // })

  // it('should show the tickets info, contact info as well as credit card info on clicking save and continue', function () {

  // })

  // it('should show use promo code link', function () {

  // })

  // it('should show an input field upon clicking the promo code link', function () {

  // })

  // it('should show apply button to user in order to avail the discount', function () {

  // })

  // it('should show an error message if the promo code entered is invalid', function () {

  // })

  // it('should grey out the selection area and hide the downward chevron if there is only one ticket type', function () {

  // })

  // it('should show cancel button when entering subpage of modal which leads back to top level state', function () {

  // })

  // it('lead to a confirmation subpage upon hitting the complete purchase button', function () {

  // })

  // it('should show share links for twitter and facebook with prepopulated share text on confirmation subpage', function () {

  // })

  // it('show show additional text letting the user know that they can email at the hyperlinked email address anytime with questions', function () {

  // })

  // it('show credit card info for logged in, returning customers', function () {

  // })

  // it('should remove credit card info upon hitting delete button', function () {

  // })

  // it('should show input fields for credit info upon hitting add credit card info button', function () {

  // })

  // it('should display an error message when not enough tickets are available for a given timeslot or ticket type', function (){

  // })

  // it('should display a message declaring only x tickets available if there are less than 10 tickets available for a given timeslot and ticket type combination', function () {

  // })

  // it('Test selecting a different card to checkout'
  // Only x tickets' left is displayed for any timeslot + ticket type combination that has < 10 tickets when hovering
  // Default timeslot is the first timeslot that has at least two tickets available, or the first timeslot that has at least one ticket
  // After a purchase, Merchant Dashboard shows correct update (added ticket sale)
  // Race condition for purchasing (Only 1 tickets left, have two people buying the last ticket from different devices/platform). Only one person should get the ticket
  // Test error messaging when tickets become sold out in the middle of purchase flow
  // Honors sosh-paid and merchant-paid discount code
  // Test ref is carried over correctly in buy flow
  // If a user already purchased via iOS, web should already have their CC stored in checkout flow
  // If a user already purchased via web, iOS should already have their CC stored in checkout flow
  // Checkout flow works (able to buy tickets)
});