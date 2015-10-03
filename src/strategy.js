var OAuth2Strategy = require('passport-oauth').OAuth2Strategy;
var util = require('util');

const TWITCHALERTS_API_AUTH = "https://www.twitchalerts.com/api/v1.0/authorize";
const TWITCHALERTS_API_TOKEN = "https://www.twitchalerts.com/api/v1.0/token";

function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = TWITCHALERTS_API_AUTH;
  options.tokenURL = TWITCHALERTS_API_TOKEN;

  OAuth2Strategy.call(this, options, verify);
  this.name = 'twitchalerts';
}

util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.userProfile = function (accessToken, done) {
  var profile = { provider: 'twitchalerts' };
  done(null, profile);
};

module.exports = Strategy;
