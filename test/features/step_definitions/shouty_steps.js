var assert = require('assertthat'),
    Shout =  require('../../lib/shouter'),
    Listener =  require('../../lib/listener');

module.exports = function () {

    this.World = require('../../cuke_world/world.js').World;
    var message;

    this.Given(/^Lucy is (\d+)m away from Sean$/, function(range, callback) {

        this.lucy.setRange(range);
        callback();

    });

    this.When(/^Sean shouts "([^"]*)"$/, function(message, callback) {
        
        this.sean.shout(message);
        callback();

    });

    this.Then(/^Lucy should hear "([^"]*)"$/, function(expected_message, callback) {

        assert.that(this.lucy.getMessages()).is.containing(expected_message);
        callback();

    });

    this.Then(/^Lucy should not hear "([^"]*)"$/, function(not_expected_message, callback) {

        assert.that(this.lucy.getMessages()).is.not.containing(not_expected_message);
        callback();

    });

    this.Then(/^Lucy is within Sean's range$/, function(callback) {
        this.lucy.setRange(1000);
        callback();
    });


    this.Then(/^Sean shouts$/, function(callback) {
        message = 'Hey';
        this.sean.shout(message);
        callback();
    });


    this.Then(/^Lucy should hear Sean's message$/, function(callback) {
        assert.that(this.lucy.getMessages()).is.containing(message);
        callback();
    });
};