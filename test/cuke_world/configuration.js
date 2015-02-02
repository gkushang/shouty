
"use strict";


var qaConfig        = require('../config/qa.json'),
    stagingConfig   = require('../config/staging.json'),
    commonConfig    = require('../config/config.json'),
    nconf           = require('nconf'),
    _               = require('underscore');


function Configuration() {
    process.env['PATH'] += ':' + process.env['HOME'];
};

Configuration.prototype.get = function get() {

    nconf.argv()
        .env();

    var env = nconf.get('NODE_ENV');

    console.log('running tests on ' + env + ' environement');

    if(nconf.get('target') === 'sauce') {
        commonConfig.targetServer = commonConfig.sauceLabsServer;
    }

    if(env === 'staging'){
        return _.extend(commonConfig, stagingConfig);

    }else {
        return _.extend(commonConfig, qaConfig);
    }

};

module.exports = Configuration;


