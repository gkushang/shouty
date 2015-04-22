
"use strict";


var Listener = function Listener(network) {
    this.network = network;
    this.network.register(this);
    this.messages = [];
};

Listener.prototype.setRange = function setRange(range) {
    this.range = range;
};


Listener.prototype.getRange = function getRange() {
    return this.range;
};

Listener.prototype.hear = function hear(message) {
    this.messages.push(message);
};

Listener.prototype.getMessages = function getMessages() {
      return this.messages.toString();
};

module.exports=Listener;
