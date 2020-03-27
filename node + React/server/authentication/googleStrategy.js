const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var User = require('../models/user');


module.exports = function() {

    passport.use(new GoogleStrategy({
        clientID: '99262913241-34kinunkju2uq0qn651e9olps3i99jr5.apps.googleusercontent.com',
        clientSecret: 'U4lZCBkpKohxBQrM83N0MxIp',
        callbackURL: 'http://localhost:8000/auth/google/callback',
        passReqToCallback : true
        },
        function(req, token, refreshToken, profile, done) {
            console.log('trying to access');
              // asynchronous
            process.nextTick(function() {
            
                // check if the user is already logged in
                if (!req.user) {
            
                    User.findOne({ 'google.id' : profile.id }, function(err, user) {

                        if (err)
                            return done(err);
                        if (user) {
                            // if there is a user id already but no token (user was linked at one point and then removed)
                            if (!user.google.token) {
                                user.google.token = token;
                                user.google.name  = profile.displayName;
                                user.google.email = profile.emails[0].value; // pull the first email
                                    user.save(function(err) {
                                        if (err)
                                            throw err;
                                            return done(null, user);
                                        });
                                    }
                                    return done(null, user);
                                } else {
                                    var newUser          = new User();
            
                                    newUser.google.id    = profile.id;
                                    newUser.google.token = token;
                                    newUser.google.name  = profile.displayName;
                                    newUser.google.email = profile.emails[0].value; // pull the first email
            
                                    newUser.save(function(err) {
                                        if (err)
                                            throw err;
                                        return done(null, newUser);
                                    });
                                }
                            });
            
                        } else {
                            // user already exists and is logged in, we have to link accounts
                            var user = req.user; // pull the user out of the session
            
                            user.google.id    = profile.id;
                            user.google.token = token;
                            user.google.name  = profile.displayName;
                            user.google.email = profile.emails[0].value; // pull the first email
            
                            user.save(function(err) {
                                if (err)
                                    throw err;
                                return done(null, user);
                            });
            
                        }
            
                    });
  
        }
    ));
  
}