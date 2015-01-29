/**
 * Created by kugajjar on 1/26/15.
 */

"use strict";

var Q           = require('q');
var TeslaDriver = require('../lib/tesla_driver');

function Personal_signup_page(nemo) {
    this.td = new TeslaDriver(nemo);
};

function locator (){

    return {

         email: {
             "locator": "email",
             "type": "id"
         },

         password: {
             "locator": "password",
             "type": "id"
         },

         confirmPassword: {
             "locator": "confirmPassword",
             "type": "id"
         },

        continue: {
            "locator": "_eventId_personal",
            "type": "id"
        }
    }
};

Personal_signup_page.prototype.signUp = function signUp(email, password) {

    this.td.clearAndType(locator().email, "kushang@something.com");
    this.td.clearAndType(locator().password, "Abcd@123");
    this.td.clearAndType(locator().confirmPassword, "Abcd@123");
    this.td.click(locator().continue);
    console.log("done: Personal_signup_page");
    return Q.resolve();
};

module.exports = Personal_signup_page;

