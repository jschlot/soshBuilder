'use strict';

var CheckoutModal = function () {
  // outside of modal
  this.bodyNode = element(by.css("body"));
  this.BuyTicketsButton = element.all(by.css('.purchase-button')).get(0);

  // widgets in modal

  //// the Header
  this.headerBlock = {};
  this.headerBlock.photo = element.all(by.css('.checkout-modal-wrapper .header .photo img'));
  this.headerBlock.title = element.all(by.css('.checkout-modal-wrapper .header .info .title')).get(0);

  this.headerBlock.detailsList = element.all(by.css('.checkout-modal-wrapper .header .details .detail-item p'));
  this.headerBlock.where = this.headerBlock.detailsList.get(0);
  this.headerBlock.when = this.headerBlock.detailsList.get(1);

  this.headerBlock.cancel = element.all(by.css('.checkout-modal-wrapper .header .close'));

  //// the Footers (3)
  this.footerBlock = {};
  this.footerBlock.addPaymentButton = element.all(by.css('.add-info-button'));
  this.footerBlock.cancelPaymentButton = element(by.css('.footer .cancel-button'));
  this.footerBlock.savePaymentButton = element(by.css('.footer .save-continue-button'));

  this.views = {};
  this.views.ticketing = element(by.css('.view-ticketing'));
  this.views.payment = element(by.css('.view-payment'));
  this.views.success = element(by.css('.view-success'));

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

  //// Line Items
  this.lineItems = {};
  this.lineItems.list = element.all(by.css('.line-items .item'));
  this.lineItems.ticketAmount = this.lineItems.list.get(0).element(by.css('.label'));
  this.lineItems.ticketCost = this.lineItems.list.get(0).element(by.css('.value'));
  this.lineItems.taxAndTip = this.lineItems.list.get(1).element(by.css('.value'));
  this.lineItems.total = this.lineItems.list.get(2).element(by.css('.value'));

  //// Payment Info form
  this.paymentInfoForm = {};
  this.paymentInfoForm.billing = {};
  this.paymentInfoForm.billing.name = element(by.css('.add-info-form input[name=name]'));
  this.paymentInfoForm.billing.email = element(by.css('.add-info-form input[name=email]'));
  this.paymentInfoForm.billing.phone = element(by.css('.add-info-form input[name=phone]'));

  this.paymentInfoForm.cc = {};
  this.paymentInfoForm.cc.cardNumber = element(by.css('.add-card-form input.card'));
  this.paymentInfoForm.cc.expirationDate = element(by.css('.add-card-form .expiration input'));
  this.paymentInfoForm.cc.securityCode = element(by.css('.add-card-form .security input'));

  this.paymentRecap = {};
  this.paymentRecap.name = element(by.css('.contact-info .name'));
  this.paymentRecap.email = element(by.css('.contact-info .email'));
  this.paymentRecap.phone = element(by.css('.contact-info .phone'));
  this.paymentRecap.payment = element(by.css('.payment-info .card'));

  this.paymentRecap.promoButton = element(by.css('.promo-code-wrapper .show-promo-link'));
  this.paymentRecap.promoBox = element(by.css('.promo-code-form-group'));
  this.paymentRecap.promoCodeInput = element(by.css('.promo-code-form input[name=promo]'));
  this.paymentRecap.promoCodeButton = element(by.css('.promo-code-form .promo-button'));

};

module.exports = CheckoutModal;