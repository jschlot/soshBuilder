var express = require('express'),
    router = express.Router(),
    activities = {},
    evergreen = {},
    promo = {};

evergreen =  {
    'type': "evergreen",
    'when': "1423900800000",
    "where": {
        "venue": "Mezzanine",
        "neighborhood": "SOMA"
    },
    "price": 2500,
    'images': [
        {
            'url': "https://dm8upoct4laqm.cloudfront.net/thumbs/c2/0d/c20d90739bf3562a829e5722b252d038.jpg",
            'alt': "Kiesza"
        }
    ],
    "details": {
        "title": "Kiesza",
        "subtitle": "",
        "description":""
    },
    'added': "1423248209737"
};

promo = {
    'type': "promo",
    'when': "1423900800000",
    "where": {
        "venue": "Mezzanine",
        "neighborhood": "SOMA"
    },
    "price": 2500,
    'images': [
        {
            'url': "https://dm8upoct4laqm.cloudfront.net/thumbs/bd/8d/bd8d8462ccf5309801f00a1d9d88b28e.jpg",
            'alt': "Love is Blind"
        }
    ],
    "details": {
        "title": "Roses are Red",
        "subtitle": "Feel the Love",
        "description":"Whether you’re going steady or crave a fabulous night out with friends, we’ve partnered with the finest in food &amp; fun to help you wine &amp; dine with the best of them — workshops, pop-ups, parties &amp; more. This Valentine's, let’s make it exclusive."
    },
    'added': "1423248209737"
};


activities.list = [
    evergreen, evergreen, evergreen,
    promo,
    evergreen, evergreen, evergreen
];

/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.json(activities.list);
});


module.exports = router;
