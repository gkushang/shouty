
"use strict";
var Rules =  require('./rules');


var Network = function Network() {
    this.rules = new Rules();
    this.listeners = [];
};

Network.prototype.register = function register(listener) {
    this.listeners.push(listener);
};

Network.prototype.broadcast = function broadcast(message) {
    var self = this;

    if(message.length <= self.rules.getMessageLength() ) {

        this.listeners.forEach(function (listener) {
            if (listener.getRange() <= self.rules.getRange()) {
                listener.hear(message);
            }
        });
    }
};

module.exports=Network;