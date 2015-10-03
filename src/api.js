var request = require('request');
var extend = require('util')._extend;

const TWITCHALERTS_BASE_URI = "https://www.twitchalerts.com/api/v1.0";

function API(token) {
  this.token = token;
}

API.prototype.get = function(endpoint, opts, callback) {
  var o = opts ? extend({}, opts) : {};
  o.access_token = this.token;

  request.get({
    uri: TWITCHALERTS_BASE_URI + endpoint,
    qs: o
  }, (err, resp, body) => {
    if (err) {
      return callback(err);
    } else {
      var parsed = JSON.parse(body);
      return callback(null, resp.statusCode, parsed);
    }
  });
};

module.exports = API;
