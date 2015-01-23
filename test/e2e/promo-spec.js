'use strict';

browser.ignoreSynchronization = true;
var PromoPage = require('../pages/promo.js');

describe('Promo Page', function() {

    // baseline behavior aka "classic" promo page
    it('should display the default promo page correctly if no bullet points are filled', function() {
        var page;
        browser.get("/san-francisco/marketplace/antempo/m/5gbz/");
        page = new PromoPage();

        // the page title tag matches the main page title displayed in the body
        expect(page.titleTag).toContain("Ante Meridian: Instagram-Worthy Brunch Pop-Up");
        expect(page.titleBlock.get(0).getText()).toBe("Ante Meridian: Instagram-Worthy Brunch Pop-Up");

        // the info section renders correctly
        expect(page.infoSection.get(0).getText()).toBe("SUNDAY, JANUARY 25\n11:30AM");
        expect(page.infoSectionIcons.get(0).getAttribute('src')).toContain("calendar.png");
        expect(page.infoSection.get(1).getText()).toBe("NAKED KITCHEN\n945 VALENCIA ST\nSAN FRANCISCO, CA 94110");
        expect(page.infoSectionIcons.get(1).getAttribute('src')).toContain("location.png");
        expect(page.infoSection.get(2).getText()).toBe("$45 PER PERSON");
        expect(page.infoSectionIcons.get(2).getAttribute('src')).toContain("receipt.png");

        // there are no bullet points
        expect(page.bulletPoints.count()).toBe(0);

        // there is an about Event block, it has a large title font
        expect(page.oldAboutEventTitle.get(0).getText()).toBe("A BYOB Brunch In A Secret Mansion");
        expect(page.oldAboutEventTitle.get(0).getCssValue('font-size')).toBe("26px");

        // there is a menu block & the block contains the word "Menu"
        expect(page.menuBlock.count()).toBeGreaterThan(0);
        expect(page.menuBlock.get(0).getText()).toContain("Menu");

        // ticketing info
        expect(page.ticketingInfo.header.get(0).getText()).toBe("$65 CHEF'S COUNTER");
        expect(page.ticketingInfo.copy.get(0).getText()).toBe("Includes VIP seating at the chef's counter, prix fixe brunch, champagne, tax, and gratuity");

        expect(page.ticketingInfo.header.get(1).getText()).toBe("$45 COMMUNAL SEATING");
        expect(page.ticketingInfo.copy.get(1).getText()).toBe("Includes prix fixe brunch, tax, and gratuity");

        // the about Venue section
        expect(page.aboutVenue.header.get(0).getText()).toBe("NAKED KITCHEN");
        expect(page.aboutVenue.copy.get(0).getText()).toBe("Naked Kitchen is a converted mansion in the heart of the Mission that provides an intimate setting for food, wine, and stories.");

        expect(page.socialButtons.facebook.get(0).getText()).toBe("Facebook");
        expect(page.socialButtons.link.get(0).getText()).toBe("Link");

        // there is a "better with sosh" section
        expect(page.betterWithSosh.header.get(0).getText()).toBe("BETTER WITH SOSH");

        expect(page.betterWithSosh.images.get(0).getAttribute("src")).toContain("check_grey.png");
        expect(page.betterWithSosh.titles.get(0).getText()).toBe("No Check");
        expect(page.betterWithSosh.texts.get(1).getText()).toBe("Pay in advance (including tip) so you can just get up and go at the end of your experience. No mark-ups or premiums.");

        expect(page.betterWithSosh.images.get(1).getAttribute("src")).toContain("ribbon_grey.png");
        expect(page.betterWithSosh.titles.get(1).getText()).toBe("Money-Back Guarantee");
        expect(page.betterWithSosh.texts.get(3).getText()).toBe("Sosh promises you'll love your experience or you'll get your money back.");

        expect(page.betterWithSosh.images.get(2).getAttribute("src")).toContain("dinner_bell_grey.png");
        expect(page.betterWithSosh.titles.get(2).getText()).toBe("Personal Service");
        expect(page.betterWithSosh.texts.get(5).getText()).toBe("Questions? Shoot us an email anytime or call us between 1-9PM.");
        expect(page.betterWithSosh.emailLink.get(0).getAttribute('href')).toBe("mailto:tickets@sosh.com");
        expect(page.betterWithSosh.phoneNumber.get(0).getText()).toBe("(415) 231-6267");

        expect(page.photoCredit.get(0).getText()).toBe("PHOTO CREDIT: Jorge Novoa");

    });

    it('should handle the social button clicks correctly', function() {
        var page;
        browser.get("http://tapir:chantek@jack.tapir.offlinelabs.com/san-francisco/marketplace/antempo/m/5gbz/");
        page = new PromoPage();

        // not supporting facebook share or bookmarking at this time
        expect(page.socialButtons.shareURL.get(0).getText()).toBe('');
        page.socialButtons.link.get(0).click();
        expect(page.socialButtons.shareURL.get(0).getText()).toBeDefined();
    });

    it('should show bullet points correctly if they are present in the page', function() {
        var page;
        browser.get("http://tapir:chantek@jack.tapir.offlinelabs.com/san-francisco/marketplace/antempo/m/5g47/");
        page = new PromoPage();

        // there are bullet points
        expect(page.bulletPoints.count()).toBe(1);

        // the first bullet is the cat icon
        expect(page.bulletPointIcons.get(0).getAttribute("src")).toContain("Cat.png");

        // the first title is the "Greek" title, the first text is the "Greek" text
        expect(page.bulletPointTitles.get(0).getText()).toBe("Lorem Ipsum");
        expect(page.bulletPointTexts.get(0).getText()).toContain("Lorem ipsum dolor sit amet");

        // the title is orange and bold
        expect(page.bulletPointTitles.get(0).getCssValue('color')).toBe("rgba(219, 165, 113, 1)");
        expect(page.bulletPointTitles.get(0).getCssValue('font-weight')).toBe("bold");

        // there is no about Event block, it has a large title font
        expect(page.oldAboutEventTitle.count()).toBe(0);

        // there is no menu Block items
        expect(page.menuBlock.count()).toBe(0);
    });

});