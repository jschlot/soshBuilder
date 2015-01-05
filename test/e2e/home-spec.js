'use strict';

browser.ignoreSynchronization = true;
var HomePage = require('../pages/home.js');

describe('Home Page', function() {
	var page;

	beforeEach(function () {
		browser.get("http://www.sosh.com");
		page = new HomePage();
	});

	it('Should render the page elements correctly', function() {
		expect(page.titleTag).toBe("Sosh :: Discover and share local activities");
		expect(page.intlTag).toBe("utf-8");

		expect(page.logo.image).toContain("header.png");
		expect(page.logo.link).toContain("http://sosh.com/");

		expect(page.hiringCTA.text).toBe("We're hiring!");
		expect(page.hiringCTA.link).toBe("http://sosh.com/about/?ref=header");

		expect(page.loginCTA.text).toBe("Log In");
		expect(page.loginCTA.link).toBe("http://sosh.com/accounts/login/");

		expect(page.section1.background).toContain("section-1.jpg");
		expect(page.section1.heading).toBe("Life's too short to be bored.");
		expect(page.section1.subHeading).toBe("Discover amazing events, activities, and places.");
		expect(page.section1.joinCTA.text).toBe("Join Sosh");
		expect(page.section1.joinCTA.link).toBe("http://sosh.com/signup/");

		expect(page.footer.ownership.logo).toContain("header.png");
		expect(page.footer.ownership.copyright).toBe("COPYRIGHT 2014");
		expect(page.footer.ownership.companyname).toBe("OFFLINE LABS, INC.");
		expect(page.footer.sosh.heading).toBe("SOSH");
		expect(page.footer.sosh.about.text).toBe("About Us");
		expect(page.footer.sosh.about.link).toBe("http://sosh.com/about/");
		expect(page.footer.sosh.jobs.text).toBe("Jobs");
		expect(page.footer.sosh.jobs.link).toBe("http://sosh.com/jobs/");
		expect(page.footer.sosh.privacy.text).toBe("Privacy Policy");
		expect(page.footer.sosh.privacy.link).toBe("http://sosh.com/pages/privacy/");
		expect(page.footer.sosh.tos.text).toBe("Terms of Service");
		expect(page.footer.sosh.tos.link).toBe("http://sosh.com/pages/tos/");
		expect(page.footer.contribute.heading).toBe("CONTRIBUTE");
		expect(page.footer.contribute.feedback.text).toBe("Send Feedback");

		expect(page.footer.contribute.feedback.link).toBe("http://sosh.com/#");

		// expect the modal to be hidden
		page.footer.contribute.feedback.clickHandler.click();
		// expect the modal to be shown
		// expect the modal to have a h1 that says "Share Your Feedback"
		// expect the modal to have these options for "type"
		// select an option
		// enter some test text
		// click send
		// expect to see the "thank you" box saying "Thanks for taking the time to give us feedback. We'll get back to you soon!"

		expect(page.footer.contribute.suggest.text).toBe("Suggest an Activity");
		expect(page.footer.contribute.suggest.link).toBe("http://sosh.com/submit_activity/");
		expect(page.footer.contribute.localBusiness.text).toBe("Own a Local Business?");
		expect(page.footer.contribute.localBusiness.link).toBe("http://sosh.com/business/");
		expect(page.footer.keepInTouch.heading).toBe("KEEP IN TOUCH");
		expect(page.footer.keepInTouch.blog.text).toBe("Blog");
		expect(page.footer.keepInTouch.blog.link).toBe("http://sosh.com/blog/");
		expect(page.footer.keepInTouch.facebook.text).toBe("Facebook");
		expect(page.footer.keepInTouch.facebook.link).toBe("https://facebook.com/SoshSF");
		expect(page.footer.keepInTouch.twitter.text).toBe("Twitter");
		expect(page.footer.keepInTouch.twitter.link).toBe("http://twitter.com/Sosh");

	});

});
