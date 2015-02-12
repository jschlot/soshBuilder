'use strict';

browser.ignoreSynchronization = true;
var PromoSeriesPage = require('../../pages/promo.js'),
    baseURL = 'san-francisco/marketplace/test-event/m/zS4b/';

describe('PromoSeries Page', function () {
  var page;

  beforeEach(function(){
      browser.get(baseURL);
      page = new PromoSeriesPage();
  });

  afterEach(function(){
      page = null;
  });

  // multiple date dropdown
  it('should display the multiple date dropdown properly', function (){
      expect(page.dateOptions.list.count()).toBeGreaterThan(0);
      expect(page.dateOptions.selected.arrow.getCssValue("display")).toBe("block");
      expect(page.dateOptions.selected.date.getText()).toContain("FRIDAY, FEBRUARY 20");
      expect(page.dateOptions.selected.time.getText()).toContain("2:30PM");
  });

  it('should have the option for February 14, 6:30 pm set to "sold out" and not clickable', function () {
      page.dateOptions.selected.box.click();
      browser.sleep(2000);

      expect(page.dateOptions.list.get(2).getAttribute('class')).toMatch("date-info");
  });

  it('should display the "Other Events" section properly', function() {
      expect(page.futureEvents.merchantTitle.getText()).toContain("Felix Test inc");
      expect(page.futureEvents.seriesTitleList.get(0).getText()).toBe("Last Chance: Tasting Menu by Award-Winning Chef");

      expect(page.futureEvents.seriesDateList.count()).toEqual(3);
      expect(page.futureEvents.seriesDateList.get(0).getText()).toContain("February 28");
      expect(page.futureEvents.seriesDateList.get(0).getText()).toContain("(SOLD OUT)");
  });

});