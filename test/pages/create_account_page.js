/**
 * Created by kugajjar on 1/26/15.
 */

"use strict";

var Q           = require('q');
var TeslaDriver = require('../lib/tesla_driver');

function Create_account_page(nemo) {
    this.td = new TeslaDriver(nemo);
    this.td.sync(locator().firstName);
};

function locator (){

    return {

            firstName: {
                "locator": "firstName",
                "type": "id"
            },

            lastName: {
                "locator": "lastName",
                "type": "id"
            },

            street_address: {
                "locator": "address1",
                "type": "id"
            },

            city: {
                "locator": "city",
                "type": "id"
            },

            state: {
                "locator": "state",
                "type": "id"
            },

            zip_code: {
                "locator": "postalCode",
                "type": "id"
            },

            "phoneOption": {
                "locator": "phoneOption",
                "type": "id"
            },

            phoneNumber: {
                "locator": "phoneNumber",
                "type": "id"
            },

            termsAgree: {
                "locator": "termsAgree",
                "type": "id"
            }
    }
};

Create_account_page.prototype.create = function create() {

    console.log("In: Create_account_page");

    this.td.clearAndType(locator().firstName, "Kushang");
    this.td.clearAndType(locator().lastName, "Gajjar");
    this.td.clearAndType(locator().street_address, "1 International Place");
    this.td.clearAndType(locator().city, "Boston");
    this.td.clearAndType(locator().zip_code, "02110");
    this.td.clearAndType(locator().phoneNumber, "911-000-0000");
    console.log("Done: Create_account_page");
    return Q.resolve();
};

module.exports = Create_account_page;

