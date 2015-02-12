'use strict';

var paths = function(env) {
    var options = {
        'integration': 'http://tapir:chantek@jack.tapir.offlinelabs.com'
    },
    selectedPath = options[env];

    return selectedPath;
};

module.exports = paths;