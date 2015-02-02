var Nemo            = require('nemo'),
    Navigate        = require('../pages/navigate'),
    plugins         = require('../plugins/nemo-plugins'),
    Configuration   = require('./configuration');

process.env.nemoData = JSON.stringify(new Configuration().get());

var WorldConstructor = function WorldConstructor(callback) {

    var thisWorld = this;

    (new Nemo(plugins)).
        setup({}).
        then(function (nemo) {

            thisWorld.nemo = nemo;
            thisWorld.driver = nemo.driver;
            thisWorld.props = nemo.props;
            thisWorld.navigate = new Navigate(nemo);
            callback();

        }).
        then(null, function (err) {
            console.error('Error in instantiating World: ' + err);
        });
};

exports.World = WorldConstructor;