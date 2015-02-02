/**
 * Created by kugajjar on 1/26/15.
 */

"use strict";

var Q           = require('q');
var TeslaDriver = require('../lib/tesla_driver');

function Account_page(nemo) {

    this.td = new TeslaDriver(nemo);

};

function td() {

    return this.td;
};

function locator (){

   return {

        continue: {
            "locator": "personalSignUpForm",
            "type": "id"
        }
   };
};

Account_page.prototype.chooseAccountType = function chooseAccountType(accountType) {

    this.td.click(locator().continue);

    return Q.resolve();
};

module.exports = Account_page;

