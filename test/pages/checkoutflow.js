'use strict';

var CheckoutModal = function () {
  this.BuyTicketsButton = element.all(by.css('#purchase-button'));
  this.BuyTicketsButton.link = element.all(by.css("#purchase-button")).get(0).getAttribute('href');

  this.header = {};
  this.header.EventTitle = element.all(by.css('.checkout-modal-wrapper .header .title'));
  this.EventLocation = element.all(by.css('.checkout-modal-wrapper .header .detail-item p'));
  this.EventTiming = element.all(by.css('.checkout-modal-wrapper .header .detail-item p'));
};

module.exports = CheckoutModal;