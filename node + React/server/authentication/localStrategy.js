const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local');

//create local strategy
const localOptions = {usernameField: 'email'};
const localLogin = new LocalStrategy(localOptions, function(email,password,done){
    //verify this username and password , call done with the user
    //if it is correct username and password, 
    //otherwise call done with false
    console.log('local call');
    User.findOne({email: email}, function(err, user){
       if(err) { return done(err); }
       if(!user) { return done(null,false); }

       //compare passwords
       user.comparePassword(password, function(err, isMatch){
           if (err) { return done(err); }
           if(!isMatch) { return done(null, false); }
           return done(null, user);
       })

    });
})

passport.use(localLogin);
module.exports = passport;