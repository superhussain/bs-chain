'use strict';

var express = require('express'),
  app = express(),
  bodyParser = require("body-parser"), //L.R.
  errorhandler = require('errorhandler'),
  session = require('express-session'),
  // bluemix = require('./config/bluemix'),
  // watson = require('watson-developer-cloud'),
  path = require('path'),
  passport = require('passport'),
  CoinbaseStrategy = require('passport-coinbase').Strategy,
  // environmental variable points to demo's json config file
  extend = require('util')._extend,
  fs = require('fs');

// Rename .html to ejs
fs.rename(__dirname + '/dist/index.html', __dirname + '/dist/index.ejs', function (err) {
  if (err) {
    fs.stat(__dirname + '/dist/index.ejs', function (err) {
      if (err) return console.warn('ERROR:' + err);
    })
  }
  console.log("index.html: HTML to EJS success!");
});

// For local development, put username and password in config
// or store in your environment
// var config = {
//   version: 'v1',
//   url: 'https://stream.watsonplatform.net/speech-to-text/api',
//   username: "676a5bd9-8cd8-4d79-8a6c-8790137934d6",
//   password: "P0Lz3XYep07Q"
// };

// if bluemix credentials exists, then override local
// var credentials = extend(config, bluemix.getServiceCreds('speech_to_text'));
// var authorization = watson.authorization(credentials);

// Coinbase api token
var COINBASE_CLIENT_ID = "89471a61cd057bc083ae8b2aa3e131b896682013c25760e3c6e115352049f9db";
var COINBASE_CLIENT_SECRET = "e96067050d0a0f966833bd89770d0c45bdb59ef18a259012fdf79058315a3fe7";

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Coinbase profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});


// Use the CoinbaseStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken and refreshToken),
//   and invoke a callback with a user object.
passport.use(new CoinbaseStrategy({
  clientID: COINBASE_CLIENT_ID,
  clientSecret: COINBASE_CLIENT_SECRET,
  callbackURL: "http://127.0.0.1:5000/auth/coinbase/callback",
  // callbackURL: "http://bs-chain.com/auth/coinbase/callback",
  scope: ["user"]
},
  function (accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {

      // To keep the example simple, the user's Coinbase profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Coinbase account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

// configure Express
app.set('views', __dirname + '/dist');
app.set('view engine', 'ejs');
// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(session({ secret: 'keyboard cat' }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/dist'));


// redirect to https if the app is not running locally
if (!!process.env.VCAP_SERVICES) {
  app.enable('trust proxy');
  app.use(function (req, res, next) {
    if (req.secure) {
      next();
    } else {
      res.redirect('https://' + req.headers.host + req.url);
    }
  });
}

app.get('/', function (req, res) {
  if (req.user && !req.params && !req.params.status) {
    res.redirect('/?status=success&user=' + req.user.id);
  } else {
    res.render('index');
  }
});

app.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account', { user: req.user });
});

app.get('/login', function (req, res) {
  res.render('login', { user: req.user });
});

// GET /auth/coinbase
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Coinbase authentication will involve redirecting
//   the user to coinbase.com.  After authorization, Coinbase will redirect the user
//   back to this application at /auth/coinbase/callback
app.get('/auth/coinbase',
  passport.authenticate('coinbase'),
  function (req, res) {
    // The request will be redirected to Coinbase for authentication, so this
    // function will not be called.
  });

// GET /auth/coinbase/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/coinbase/callback',
  passport.authenticate('coinbase', { failureRedirect: '/' }),
  function (req, res) {
    console.log(JSON.stringify(req.user));
    res.redirect('/?status=success&user=' + req.user.id);
  });

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// Add error handling in dev
if (!process.env.VCAP_SERVICES) {
  app.use(errorhandler());
}
var port = process.env.VCAP_APP_PORT || 5000;
app.listen(port);
console.log('listening at:', port);

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}