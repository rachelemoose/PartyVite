const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');

passport.use(
    newGoogleStrategy({
    
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
    }, (accessToken, refreshToken, profile, done) => {

        console.log('passport cb fired');
        console.log(profile);
    })
) 