'use strict';

var HomePage = function () {
    this.titleTag =  browser.getTitle();
    this.intlTag = element(by.css('meta[charset]')).getAttribute('charset');

    this.logo = {};
    this.logo.image =  element(by.id('header-logo')).getCssValue('background-image');
    this.logo.link = element(by.id('header-logo-link')).getAttribute('href');

    this.hiringCTA = {};
    this.hiringCTA.text = element(by.css('.header-jobs')).getText();
    this.hiringCTA.link = element(by.css('.header-jobs a')).getAttribute('href');

    this.loginCTA = {};
    this.loginCTA.text = element(by.css('#header-right')).getText();
    this.loginCTA.link = element(by.css('#header-right a')).getAttribute('href');

    this.section1 = {};
    this.section1.background = element(by.id('section-1')).getCssValue('background-image');
    this.section1.heading = element(by.css("#section-1 .white-heading")).getText();
    this.section1.subHeading = element(by.css("#section-1 .white-subheading")).getText();

    this.section1.joinCTA = {};
    this.section1.joinCTA.text = element(by.css("#section-1 .become-a-member")).getText();
    this.section1.joinCTA.link = element(by.css("#section-1 a")).getAttribute('href');

    this.footer = {};
    this.footer.ownership = {};
    this.footer.ownership.logo = element(by.css(".footer-logo")).getCssValue('background-image');
    this.footer.ownership.copyright = element.all(by.css(".headings")).get(0).getText();
    this.footer.ownership.companyname = element.all(by.css(".headings")).get(1).getText();

    this.footer.sosh = {};
    this.footer.sosh.heading = element.all(by.css(".headings")).get(2).getText();
    this.footer.sosh.about = {};
    this.footer.sosh.about.text = element.all(by.css(".footer-links a")).get(0).getText();
    this.footer.sosh.about.link = element.all(by.css(".footer-links a")).get(0).getAttribute('href');

    this.footer.sosh.jobs = {};
    this.footer.sosh.jobs.text = element.all(by.css(".footer-links a")).get(1).getText();
    this.footer.sosh.jobs.link = element.all(by.css(".footer-links a")).get(1).getAttribute('href');

    this.footer.sosh.privacy = {};
    this.footer.sosh.privacy.text = element.all(by.css(".footer-links a")).get(2).getText();
    this.footer.sosh.privacy.link = element.all(by.css(".footer-links a")).get(2).getAttribute('href');

    this.footer.sosh.tos = {};
    this.footer.sosh.tos.text = element.all(by.css(".footer-links a")).get(3).getText();
    this.footer.sosh.tos.link = element.all(by.css(".footer-links a")).get(3).getAttribute('href');

    this.footer.contribute = {};
    this.footer.contribute.heading = element.all(by.css(".headings")).get(3).getText();

    this.footer.contribute.feedback = {};
    this.footer.contribute.feedback.text = element.all(by.css(".footer-links a")).get(4).getText();
    this.footer.contribute.feedback.link = element.all(by.css(".footer-links a")).get(4).getAttribute('href');
    this.footer.contribute.feedback.clickHandler = element.all(by.css(".footer-links a")).get(4);

    this.footer.contribute.suggest = {};
    this.footer.contribute.suggest.text = element.all(by.css(".footer-links a")).get(5).getText();
    this.footer.contribute.suggest.link = element.all(by.css(".footer-links a")).get(5).getAttribute('href');

    this.footer.contribute.localBusiness = {};
    this.footer.contribute.localBusiness.text = element.all(by.css(".footer-links a")).get(6).getText();
    this.footer.contribute.localBusiness.link = element.all(by.css(".footer-links a")).get(6).getAttribute('href');

    this.footer.keepInTouch = {};
    this.footer.keepInTouch.heading = element.all(by.css(".headings")).get(4).getText();

    this.footer.keepInTouch.blog = {};
    this.footer.keepInTouch.blog.text = element.all(by.css(".footer-links a")).get(7).getText();
    this.footer.keepInTouch.blog.link = element.all(by.css(".footer-links a")).get(7).getAttribute('href');

    this.footer.keepInTouch.facebook = {};
    this.footer.keepInTouch.facebook.text = element.all(by.css(".footer-links a")).get(8).getText();
    this.footer.keepInTouch.facebook.link = element.all(by.css(".footer-links a")).get(8).getAttribute('href');

    this.footer.keepInTouch.twitter = {};
    this.footer.keepInTouch.twitter.text = element.all(by.css(".footer-links a")).get(9).getText();
    this.footer.keepInTouch.twitter.link = element.all(by.css(".footer-links a")).get(9).getAttribute('href');

    this.modal = {};
    this.modal.entryForm = {};


};

module.exports = HomePage;