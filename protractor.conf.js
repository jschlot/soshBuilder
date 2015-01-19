exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
    smoke: [
      'test/e2e/*-spec.js',
      'test/e2e/checkout-flow/*-spec.js'
    ],
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
  }
};
