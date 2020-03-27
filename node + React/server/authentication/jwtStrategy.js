const passport = require('passport');
const User = require('../models/user');
const config = require('../key');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

//setup options for jwt strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret

};
// create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
    //see if the user id in the payload exists in our database
    //if it does, call done with that other
    //otherwise call done without a user object
    console.log('jwt strategy');
    User.findById(payload.sub, function(err, user){
        console.log('err2', err);
        console.log('user2', user);
        if (err) { return done(err, false); }
        
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
module.exports = passport;