var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
require('dotenv').config();

const client = process.env.client_id
const client_secret = process.env.client_id

passport.use(new GoogleStrategy({
    clientID:     client,
    clientSecret: client_secret,
    callbackURL: "/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

