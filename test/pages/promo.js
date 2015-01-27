'use strict';

var PromoPage = function () {

    this.titleTag = browser.getTitle();
    this.titleBlock = element.all(by.css(".title-box h1"));

    this.infoSection = element.all(by.css(".info-section li"));
    this.infoSectionIcons = element.all(by.css(".info-section li .info-img img"));

    this.bulletPoints = element.all(by.css(".bullet-point li"));
    this.bulletPointIcons = element.all(by.css(".bullet-point li .icon"));

    this.bulletPointTitles = element.all(by.css(".bullet-point li .bullet-title"));
    this.bulletPointTexts = element.all(by.css(".bullet-point li .bullet-text"));

    this.oldAboutEventTitle = element.all(by.css(".copy-header"));

    this.menuBlock = element.all(by.css(".copy-body"));

    this.ticketingInfo = {};
    this.ticketingInfo.buyButton = element(".purchase-button");

    this.ticketingInfo.header = element.all(by.css(".ticketing-info .ticketing-header"));
    this.ticketingInfo.copy = element.all(by.css(".ticketing-info .sidebar-copy"));

    this.aboutVenue = {};
    this.aboutVenue.header = element.all(by.css(".about-venue-info .sidebar-header"));
    this.aboutVenue.copy = element.all(by.css(".about-venue-info .sidebar-copy"));

    this.socialButtons = {};
    // this.socialButtons.bookmark // not supported in testing right now
    this.socialButtons.facebook = element.all(by.css(".share-facebook"));
    this.socialButtons.link = element.all(by.css(".share-link"));
    this.socialButtons.shareURL = element.all(by.css(".share-url"));

    this.betterWithSosh = {};
    this.betterWithSosh.header = element.all(by.css(".better-with-sosh h1"));
    this.betterWithSosh.images = element.all(by.css(".better-with-sosh li img"));
    this.betterWithSosh.titles = element.all(by.css(".better-with-sosh li .title"));
    this.betterWithSosh.texts = element.all(by.css(".better-with-sosh li p"));
    this.betterWithSosh.emailLink = element.all(by.css(".better-with-sosh li p a"));
    this.betterWithSosh.phoneNumber = element.all(by.css(".better-with-sosh>p"));

    this.futureEvents = {};
    this.futureEvents.merchantTitle = element(by.css(".future-events h4"));

    this.futureEvents.seriesTitleList = element.all(by.css(".future-events li h4"));
//    this.futureEvents.eventList = element.all(by.css(".future-events li .future=event-text span"));

    this.photoCredit = element.all(by.css(".photo-credit"));
};


module.exports = PromoPage;