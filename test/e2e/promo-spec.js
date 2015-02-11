'use strict';

browser.ignoreSynchronization = true;
var PromoPage = require('../pages/promo.js'),
    baseURL = 'san-francisco/marketplace/eat-like-a-chef-0223/m/4c4L/';

describe('Promo Page', function() {
    var page;

    beforeEach(function(){
        browser.get(baseURL);
        page = new PromoPage();
    });

    afterEach(function(){
        page = null;
    });

    it('should display the "above the fold" section properly', function() {
        // the page title tag matches the main page title displayed in the body
        expect(page.titleTag).toContain("Eat Like a Chef, Drink Like a Sommelier");
        expect(page.titleBlock.get(0).getText()).toBe("Eat Like a Chef, Drink Like a Sommelier");

        // multiple date format
        expect(page.dateOptions.list.count()).toBeGreaterThan(0);
        expect(page.dateOptions.selected.arrow.getCssValue("display")).toBe("block");
        expect(page.dateOptions.selected.date.getText()).toContain("MONDAY, FEBRUARY 23");
        expect(page.dateOptions.selected.time.getText()).toContain("6:00PM");

        // the info section renders correctly
        expect(page.infoSection.get(0).getText()).toContain("MONDAY, FEBRUARY 23");
        expect(page.infoSection.get(0).getText()).toContain("6:00PM");
        expect(page.infoSectionIcons.get(0).getAttribute('src')).toContain("calendar.png");
        expect(page.infoSection.get(1).getText()).toContain("STONES THROW");
        expect(page.infoSection.get(1).getText()).toContain("1896 HYDE ST");
        expect(page.infoSection.get(1).getText()).toContain("SAN FRANCISCO, CA 94109");
        expect(page.infoSectionIcons.get(1).getAttribute('src')).toContain("location.png");
        expect(page.infoSection.get(2).getText()).toBe("$60 PER PERSON");
        expect(page.infoSectionIcons.get(2).getAttribute('src')).toContain("receipt.png");
    });

    it('should have the option for February 14, 6:30 pm set to "sold out" and not clickable', function () {
        page.dateOptions.selected.box.click();
        browser.sleep(2000);

        expect(page.dateOptions.list.get(2).getAttribute('class')).toMatch("event-sold-out");
    });

    it('should display the "Make a Reservation" button properly', function() {
        expect(page.ticketingInfo.buyButton.getText()).toBe("Make a Reservation");
    });

    it('should display the "Hot Ticket" bullet point properly', function() {
    });

    it('should display the "Philanthropy for Foodies" bullet point properly', function() {
    });

    it('should display the "More Info"  section properly', function() {
    });

    it('should display the Menu section properly', function() {
    });

    it('should display the "Other Events" section properly', function() {
        expect(page.futureEvents.merchantTitle.getText()).toContain("Stones Throw");
        expect(page.futureEvents.seriesTitleList.get(0).getText()).toBe("Family Style Brunch by Stones Throw");

        expect(page.futureEvents.seriesDateList.count()).toBeGreaterThan(0);
        expect(page.futureEvents.seriesDateList.get(0).getText()).toContain("January 26");
        expect(page.futureEvents.seriesDateList.get(0).getText()).toContain("(SOLD OUT)");
    });

});
