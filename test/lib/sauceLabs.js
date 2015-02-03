/**
 * Created by kugajjar on 2/2/15.
 */

function SauceLabs(options) {

    this.options = options;
};

SauceLabs.prototype.sendRequest = function sendRequest(message, callback) {

    var method  = message.method,
        url    = message.url,
        body    = JSON.stringify(data);

    path = this.options.base + replace(path, extend({}, this.options, args));
    if (query != null) {
        path += '?' + querystring.stringify(query);
    }

    var options = _.extend(this.options, {
        method: method,
        path:   path,

        headers: {
            'Accept':         'application/json',
            'Content-Type':   'application/json',
            'Content-Length': body != null ? body.length : 0
        }
    });

    makeRequest(options, body, callback);
};

module.exports = SauceLabs;
