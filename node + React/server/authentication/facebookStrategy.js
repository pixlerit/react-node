const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../models/user');


module.exports = function() {

    passport.use(new FacebookStrategy({
        
                clientID        : '133613887281673',
                clientSecret    : 'e6877524763d601cc8880ae90a170af8',
                callbackURL     : 'http://localhost:8000/auth/facebook/callback',
                passReqToCallback : true,
                profileFields: ['id', 'emails', 'name'] 
                // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        
            },
            function(req, token, refreshToken, profile, done) {
        
                // asynchronous
                process.nextTick(function() {
        
                    // check if the user is already logged in
                    if (!req.user) {
        
                        User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
                            if (err)
                                return done(err);
        
                            if (user) {
        
                                // if there is a user id already but no token (user was linked at one point and then removed)
                                if (!user.facebook.token) {
                                    user.facebook.token = token;
                                    user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                                    user.facebook.email = profile.emails[0].value;
        
                                    user.save(function(err) {
                                        if (err)
                                            throw err;
                                        return done(null, user);
                                    });
                                }
        
                                return done(null, user); // user found, return that user
                            } else {
                                // if there is no user, create them
                                var newUser            = new User();
                                console.log('profile', profile);
                                newUser.facebook.id    = profile.id;
                                newUser.facebook.token = token;
                                newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                                newUser.facebook.email = profile.emails[0].value;
        
                                newUser.save(function(err) {
                                    if (err)
                                        throw err;
                                    return done(null, newUser);
                                });
                            }
                        });
        
                    } else {
                        // user already exists and is logged in, we have to link accounts
                        var user            = req.user; // pull the user out of the session
        
                        user.facebook.id    = profile.id;
                        user.facebook.token = token;
                        user.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName;
                        user.facebook.email = profile.emails[0].value;
        
                        user.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, user);
                        });
        
                    }
                });
        
            }));
  
}