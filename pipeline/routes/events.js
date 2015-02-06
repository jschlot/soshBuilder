var express = require('express'),
    router = express.Router(),
    events = {};

events.totals = {
    merchant: {
        name: 'Stones Throw',
        logourl: "stonesthrowlogo.png",
        location: {
            city: "San Francisco",
            state: "CA"
        }
    },
    sales: {
        subtotal: 20034,
        tickets: {
            price: 100,
            sold: 1423,
            available: 0
        }
    }
};

events.upcoming = [
    {
        event: {
            date: 1422302762,
            title: 'Eat Like a Chef, Drink like a Somm',
            logourl: "stonesthrowlogo.png"
        },
        sales: {
            subtotal: 0,
            tickets: {
                price: 100,
                sold: 0,
                available: 50
            }
        }
    }
];

events.past = [
    {
        event: {
            date: 1422302762,
            title: 'Eat Like a Chef, Drink like a Somm',
            logourl: "stonesthrowlogo.png"
        },
        sales: {
            subtotal: 0,
            tickets: {
                price: 100,
                sold: 0,
                available: 50
            }
        }
    }
];


/* GET users listing. */
router.get('/totals', function(req, res, next) {
    res.send(events.totals);
});

/* GET users listing. */
router.get('/upcoming', function(req, res, next) {
    res.send(events.upcoming);
});

/* GET users listing. */
router.get('/past', function(req, res, next) {
    res.send(events.past);
});


module.exports = router;
