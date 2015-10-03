var express = require('express');
var app = express();
var passport = require('passport');
var TwitchAlertsStrategy = require('./src/strategy.js');

function TwitchAlerts(nodecg) {
  this.config = nodecg.bundleConfig;

  if (!Object.keys(this.config).length) {
    throw new Error("No config file found in cfg/bubu-twitchalerts.json.");
  }

  if (!this.config.clientID) {
    throw new Error("clientID: TwitchAlerts clientID must be specified in the config.");
  }

  if (!this.config.clientSecret) {
    throw new Error("clientSecret: TwitchAlerts clientSecret must be specified in the config.");
  }

  passport.use(new TwitchAlertsStrategy({
    clientID: this.config.clientID,
    clientSecret: this.config.clientSecret,
    callbackURL: (nodecg.config.ssl.enabled ? "https://" : "http://") + nodecg.config.baseURL + '/bubu-twitchalerts/auth',
    scope: 'donations.read'
  },
  (accessToken, refreshToken, profile, done) => {
    profile.accessToken = accessToken;
    return done(null, profile);
  }));

  var twitchalertsReplicant = nodecg.Replicant('twitchalerts', { defaultValue: null, persistent: false });

  app.get('/bubu-twitchalerts/login',
    passport.authenticate("twitchalerts", {}),
    () => {});

  app.get('/bubu-twitchalerts/auth',
    passport.authenticate("twitchalerts", { failureRedirect: '/dashboard', session: false}),
    (req, res) => {
      req.session.bubuTwitchAlerts = req.user;
      twitchalertsReplicant.value = {
        provider: req.user.provider
      };
      res.redirect('/dashboard');
    }
  );

  // Stole this pattern from the twitchapi bundle. There's gotta be a better way :(
  app.get('/bubu-twitchalerts/check', (req, res) => {
    if (req.session.bubuTwitchAlerts) {
      twitchalertsReplicant.value = req.session.bubuTwitchAlerts;
    }
    res.sendStatus(200);
  });

  app.use(passport.initialize());
  nodecg.mount(app);
}

module.exports = function(api) {
  return new TwitchAlerts(api);
};
