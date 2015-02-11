var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "http://ami:chantek@ami.hippo.offlinelabs.com",
    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }],
    suites: {
        smoke: [
            'test/e2e/*-spec.js',
            'test/e2e/checkout-flow/*-spec.js'
        ],
        login: 'test/e2e/login-spec.js',
        promo: 'test/e2e/promo-spec.js',
        home: 'test/e2e/home-spec.js',
        checkout: [
            'test/e2e/checkout-flow/init-spec.js',
            'test/e2e/checkout-flow/ticketing-spec.js',
            'test/e2e/checkout-flow/ticketing-single-option-spec.js',
            'test/e2e/checkout-flow/payment-spec.js',
            'test/e2e/checkout-flow/purchase-spec.js'
        ],
        init: 'test/e2e/checkout-flow/init-spec.js',
        payment: 'test/e2e/checkout-flow/payment-spec.js',
        purchase: 'test/e2e/checkout-flow/purchase-spec.js',
        ticketing: [
            'test/e2e/checkout-flow/ticketing-spec.js',
            'test/e2e/checkout-flow/ticketing-single-option-spec.js'
        ]
    },
    onPrepare: function() {
        // Add a reporter and store screenshots to `screnshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'screenshots'
        }));
    }
};
