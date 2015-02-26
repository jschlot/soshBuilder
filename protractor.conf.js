var HtmlReporter = require('protractor-html-screenshot-reporter'),
    paths = require('./paths.js'),
    baseURLPath = paths('integration');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: baseURLPath,
    multiCapabilities: [
        {
            'browserName': 'chrome'
//        }, {
//            'browserName': 'firefox'
        }
    ],
    suites: {
        smoke: [
            'test/e2e/*-spec.js',
            'test/e2e/checkout-flow/*-spec.js',
            'test/e2e/promo/*-spec.js'
        ],
        login: 'test/e2e/login-spec.js',
        home: 'test/e2e/home-spec.js',
        promo: [
            'test/e2e/promo/init-spec.js',
            'test/e2e/promo/series-spec.js'
        ],
        promo_series: 'test/e2e/promo/series-spec.js',
        checkout: [
            'test/e2e/checkout-flow/init-spec.js',
            'test/e2e/checkout-flow/ticketing-spec.js',
            'test/e2e/checkout-flow/ticketing-single-option-spec.js',
            'test/e2e/checkout-flow/payment-spec.js',
            'test/e2e/checkout-flow/purchase-spec.js'
        ],
        ticketing: [
            'test/e2e/checkout-flow/ticketing-spec.js',
            'test/e2e/checkout-flow/ticketing-single-option-spec.js'
        ]
    },
    onPrepare: function() {
        // Add a reporter and store screenshots to `screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'screenshots'
        }));
    }
};
