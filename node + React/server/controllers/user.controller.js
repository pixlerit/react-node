
const jwt = require('jwt-simple');
const User = require('../models/user');
var mongoose = require('mongoose');
const config = require('../key');
const async = require('async');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}
export function signUp(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    var userId;
    var newuser;
    var token;

    if (!email || !password){
        return res.status(422).send({ error: 'You must provide email and password'});
    }

    User.findOne({ email: email }, function(err, existingUser) {
        if (err) { return next(err); }
       
       // If a user with email does exist, return an error 
        if (existingUser) {
           return res.status(422).send({ error: 'Email is in use' });
        }
        
        // if a user with email does not exist
    
        const user = new User({
                                email: email,
                                password: password
                                });
        user.save(function(err) {
        if (err) { return res.json({error:"error"}); }
            token = tokenForUser(user);
            res.json({userId: user._id, token: token});
                            });
                            
                        
    });
            

}

export function signIn(req, res, next) {
    //user has already had  their email and password auth'd
    //we just need them to give  a token
    res.send({ token: tokenForUser(req.user),  userId: req.user._id  });
}
export function getUser(req, res, next) {
    console.log(user);
    res.send({user: req.user});
}