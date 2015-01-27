/**
 * Created by kugajjar on 9/21/14.
 */

"use strict";

var Q           = require('q');
var TeslaDriver = require('../lib/tesla_driver');

function Personal_signup_page(nemo) {
    this.td = new TeslaDriver(nemo);
};

Personal_signup_page.prototype.locator = {

     "email": {
         "locator": "email",
         "type": "id"
     },

     "password": {
         "locator": "password",
         "type": "id"
     },

     "confirmPassword": {
         "locator": "confirmPassword",
         "type": "id"
     },

    "continue": {
        "locator": "_eventId_personal",
        "type": "id"
    }
};

Personal_signup_page.prototype.signUp = function signUp(email, password) {

    this.td.clearAndType(this.locator.email, "kushang@something.com");
    this.td.clearAndType(this.locator.password, "Abcd@123");
    this.td.clearAndType(this.locator.confirmPassword, "Abcd@123");
    this.td.click(this.locator.continue);
    console.log("done: Personal_signup_page");
    return Q.resolve();
};

module.exports = Personal_signup_page;

