'use strict';

browser.ignoreSynchronization = true;
var PromoSeriesPage = require('../../pages/promo.js'),
    baseURL = 'san-francisco/marketplace/get-creative-outdoor-painting-workshop-lands-end/m/9RPZ/';

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
      expect(page.dateOptions.selected.date.getText()).toContain("SATURDAY, MAY 2");
      expect(page.dateOptions.selected.time.getText()).toContain("12:00PM");
      page.dateOptions.selected.box.click();
      browser.sleep(2000);
  });

  it('should have the option for March 28, 12:00 pm set to "sold out" and not clickable', function () {
      expect(page.dateOptions.selected.hasSelector.isPresent()).toBe(true);
  });

  it('should display the "Other Events" section properly', function() {
      expect(page.futureEvents.merchantTitle.getText()).toContain("Beyond Canvas");
      expect(page.futureEvents.seriesTitleList.get(0).getText()).toBe("Paint & Wine Night: Van Gogh's Starry Night");
      expect(page.futureEvents.seriesDateList.count()).toEqual(9);
      expect(page.futureEvents.seriesDateList.get(0).getText()).toContain("February 13 (SOLD OUT)");
      expect(page.futureEvents.seriesDateList.get(0).getText()).toContain("(SOLD OUT)");
  });

});