'use strict';

var CheckoutModal = function () {
  // outside of modal
  this.bodyNode = element(by.css("body"));
  this.BuyTicketsButton = element.all(by.css('.purchase-button')).get(0);

  // widgets in modal

  //// the Header
  this.headerBlock = {};
  this.headerBlock.photo = element(by.css('.checkout-modal-wrapper .header .photo img'));
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
  this.footerBlock.completePurchase = element(by.css('.footer .complete-button'));
  this.footerBlock.securityStatement = element(by.css('.footer .secure-txt'));

  //// Different Views
  this.views = {};
  this.views.ticketing = element(by.css('.view-ticketing'));
  this.views.payment = element(by.css('.view-payment'));
  this.views.success = element(by.css('.view-success-wrapper'));

  //// Ticket Type
  this.ticketTypes = {};
  this.ticketTypes.list = element.all(by.css('.ticket-type-selector ul li'));
  this.ticketTypes.selected = {};
  this.ticketTypes.selected.box = element(by.css('.selected-ticket-type'));
  this.ticketTypes.selected.name = element(by.css('.selected-ticket-type .ticket-name'));
  this.ticketTypes.selected.price = element(by.css('.selected-ticket-type .ticket-price'));
  this.ticketTypes.selected.details = element(by.css('.selected-ticket-type .ticket-details'));
  this.ticketTypes.selected.arrow = element(by.css('.selected-ticket-type .icon-down'));

  //// Number of tickets
  this.numberOfTickets = {};
  this.numberOfTickets.hasSelector = element.all(by.css('.qty-selector')).get(0);
  this.numberOfTickets.decrementBtn = element.all(by.css('.qty-selector .decrement')).get(0);
  this.numberOfTickets.amount = element.all(by.css('.selected-qty')).get(0);
  this.numberOfTickets.incrementBtn = element.all(by.css('.qty-selector .increment'));

  //// Available Times
  this.availableTimeslots = {};
  this.availableTimeslots.list = element.all(by.css('.timeslot-selector ul li'));

  //// Switch Picker
  this.optionsPicker = {};
  this.optionsPicker.box = element(by.css('.options-selector-wrapper'));
  this.optionsPicker.title = element(by.css('.options-selector-wrapper .option-title'));
  this.optionsPicker.description = element(by.css('.options-selector-wrapper .option-text'));
  this.optionsPicker.switch = element(by.css('.options-selector-wrapper .switch label'));

  //// Line Items
  //// Line Items
  this.lineItems = {};
  this.lineItems.list = element.all(by.css('.line-items .item'));

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

  //// Payment Info read-only section in the ticketing view
  this.paymentRecap = {};
  this.paymentRecap.name = element(by.css('.contact-info .name'));
  this.paymentRecap.email = element(by.css('.contact-info .email'));
  this.paymentRecap.phone = element(by.css('.contact-info .phone'));
  this.paymentRecap.payment = element(by.css('.payment-info .card'));
  this.paymentRecap.editBtn = element(by.css('.payment-info .edit'));

  this.paymentRecap.promoButton = element(by.css('.js-show-promo-link'));
  this.paymentRecap.promoBox = element(by.css('.promo-code-form-group'));
  this.paymentRecap.promoCodeInput = element(by.css('.promo-code-form input[name=promo]'));
  this.paymentRecap.promoCodeButton = element(by.css('.promo-code-form .promo-button'));
  this.paymentRecap.promoCodeError = element(by.css('.promo-code-form .error'));
  this.paymentRecap.promoCodeSuccess = element(by.css('.promo-code-form'));

  //// Order Success view
  this.successView = {};
  this.successView.time = element(by.css('.success-view .time'));
  this.successView.cardEnding = element(by.css('.success-view .last4'));
  this.successView.cardCharge = element(by.css('.success-view .price'));
  this.successView.confirmationEmail = element(by.css('.success-view .email'));
};

module.exports = CheckoutModal;