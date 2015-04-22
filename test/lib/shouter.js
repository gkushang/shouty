
"use strict";

var Shout = function Shout(network) {
    this.network = network;
};

Shout.prototype.shout = function shout(message) {
    this.network.broadcast(message);
};

module.exports=Shout;
