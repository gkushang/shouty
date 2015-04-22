
"use strict";

var sentMessage;

var Rules = function Rules() {
    this.range = 1000;
    this.messageLength = 256;
};


Rules.prototype.getRange = function getRange() {
    return this.range;
};


Rules.prototype.getMessageLength = function getMessageLength() {
    return this.messageLength;
};
module.exports=Rules;
