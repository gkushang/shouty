/**
 * Created by kugajjar on 1/26/15.
 */

var TeslaDriver = require('../lib/tesla_driver');

function Navigate(nemo) {
    this.td = new TeslaDriver(nemo);
}


Navigate.prototype = {

    to: function (url) {
        this.td.navigate(url);
    }
};

module.exports = Navigate;