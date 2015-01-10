'use strict';

var CheckoutModal = function () {
  // outside of modal
  this.bodyNode = element(by.css("body"));
  this.BuyTicketsButton = element.all(by.css('.purchase-button')).get(0);

  // widgets in modal

  //// the Header
  this.headerBlock = {};
//  this.headerBlock.photo = element.all(by.css('.checkout-modal-wrapper .header .photo'));
//  this.headerBlock.title = element.all(by.css('.checkout-modal-wrapper .header .o'));
//  this.headerBlock.where = element.all(by.css('.checkout-modal-wrapper .header .title'));
//  this.headerBlock.when = element.all(by.css('.checkout-modal-wrapper .header .title'));
//  this.headerBlock.cancel = element.all(by.css('.checkout-modal-wrapper .header .title'));

  //// the Footers (3)

  //// Ticket Type
  this.ticketTypes = {};
  this.ticketTypes.list = element.all(by.css('.ticket-type-selector ul li'));
  this.ticketTypes.selected = element.all(by.css('.selected-ticket-type')).get(0);

  //// Number of tickets
  this.numberOfTickets = {};
  this.numberOfTickets.hasSelector = element.all(by.css('.qty-selector')).get(0);
  this.numberOfTickets.decrementBtn = element.all(by.css('.qty-selector .decrement')).get(0);
  this.numberOfTickets.amount = element.all(by.css('.selected-qty')).get(0);
  this.numberOfTickets.incrementBtn = element.all(by.css('.qty-selector .increment'));

  //// Available Times
  this.availableTimeslots = {};
  this.availableTimeslots.list = element.all(by.css('.timeslot-selector ul li'));

};

module.exports = CheckoutModal;