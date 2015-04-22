var Network =  require('../../lib/network'),
    Shout =  require('../../lib/shouter'),
    Listener =  require('../../lib/listener');

var myHooks = function () {

    this.World = require("../../cuke_world/world").World;

    this.After(function(scenario, callback) {

        this.driver.quit();
        callback();

     });

    this.Before(function (scenario, callback) {

        console.log("running \"" + scenario.getName() + "\"");
        this.network = new Network();
        this.sean = new Shout(this.network);
        this.lucy = new Listener(this.network);

        callback();
    });
};

module.exports = myHooks;
