var Nemo            = require('nemo'),
    plugins         = require('../plugins/nemo-plugins'),
    Configuration   = require('./configuration');

process.env.nemoData = JSON.stringify(new Configuration().get());

var WorldConstructor = function WorldConstructor(callback) {

    var thisWorld = this;

    (new Nemo(plugins)).
        setup(new Configuration().get()).
        then(function (nemo) {

            thisWorld.nemo = nemo;
            thisWorld.driver = nemo.driver;
            thisWorld.props = nemo.props;
            callback();

        },function (err) {
            console.error('Error in instantiating World: ' + err);
            callback();
        });
};

exports.World = WorldConstructor;