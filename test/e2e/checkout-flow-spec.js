'use strict';

browser.ignoreSynchronization = true;
var CheckoutModal = require('../pages/checkoutflow.js'),
    baseURL = 'http://tapir:chantek@jack.tapir.offlinelabs.com',
    baseEvent = '/san-francisco/marketplace/somastreat/m/5VKa/';

describe('Wrapping Up an Order', function() {
  var page;

  beforeEach(function(){
    browser.get(baseURL + baseEvent);
    page = new CheckoutModal();
    page.BuyTicketsButton.click();
    browser.sleep(2000);
    page.footerBlock.addPaymentButton.get(0).click();
    browser.sleep(2000);

    page.paymentInfoForm.billing.name.sendKeys("Jack Schlotthauer");
    page.paymentInfoForm.billing.email.sendKeys("jack@sosh.com");
    page.paymentInfoForm.billing.phone.sendKeys("415 555-1234");
    page.paymentInfoForm.cc.cardNumber.sendKeys("378282246310005");
    page.paymentInfoForm.cc.expirationDate.sendKeys("12/16");
    page.paymentInfoForm.cc.securityCode.sendKeys("516");

    page.footerBlock.savePaymentButton.click();
    browser.sleep(2000);
  });

  afterEach(function(){
    page = null;
  });

  it('should show the updated, abbreviated payment info after "Save" button is clicked w/o errors', function () {
    expect(page.views.ticketing.getCssValue('display')).toBe("block");
    expect(page.views.payment.getCssValue('display')).toBe("none");
    expect(page.views.success.getCssValue('display')).toBe("none");

    expect(page.paymentRecap.name.getText()).toBe("Jack Schlotthauer");
    expect(page.paymentRecap.email.getText()).toBe("jack@sosh.com");
    expect(page.paymentRecap.phone.getText()).toBe("415 555-1234");
    expect(page.paymentRecap.payment.getText()).toBe("AMERICAN EXPRESS xxx-0005");

  });

  it('should show the promo link after "Save" button is clicked w/o errors; clicking the link reveals the input box', function () {
    expect(page.paymentRecap.savePaymentButton.getCssValue("display")).toBe("block");
    expect(page.paymentRecap.promoBox.getCssValue("display")).toBe("none");

    page.paymentRecap.promoButton.click();
    browser.sleep(2000);

    expect(page.paymentRecap.savePaymentButton.getCssValue("display")).toBe("none");
    expect(page.paymentRecap.promoBox.getCssValue("display")).toBe("block");

  });

  it('should an error if the promo code is invalid, and show an "accepted" message if it is valid', function () {
    page.paymentRecap.promoButton.click();
    browser.sleep(2000);

    page.paymentRecap.promoCodeInput.sendKeys("badpromocode");
    expect(page.paymentRecap.promoCodeError.getText()).toBe("This promo code is not valid");
  });

  it('should show the purchase complete page after entering everything in and hitting "complete purchase"', function () {
  });


  /*
   it('should blahbity when it blahs', function () {
   });
   */

});