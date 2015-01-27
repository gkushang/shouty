var Account_page = require('../../pages/account_page');
var Create_account_page = require('../../pages/create_account_page');
var Personal_signup_page = require('../../pages/personal_signup_page');
var assert = require('node-assertthat');

module.exports = function () {

    this.Then(/^I sign up for personal account$/, function (callback) {

        new Account_page(this.nemo).chooseAccountType("Personal");
        new Personal_signup_page(this.nemo).signUp("","");
        new Create_account_page(this.nemo).create();
        callback();

    });

    this.Then(/^I input all required information$/, function (callback) {
        callback();
    });

    this.Then(/^I successfully signed up for new account$/, function (callback) {
        callback();
    });
};