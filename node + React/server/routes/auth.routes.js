var express = require('express');
var passport = require('passport');
var router = express.Router();
import * as UserController from '../controllers/user.controller';

router.route('/google/callback').get(passport.authenticate('google', {
    failureRedirect: '/error'
}), function(req, res) {
    // here everything works. req.user is correctly set and req.isAuthenticated() is true
    console.log('req.user', req.user);
    res.redirect('/profile');
    
});

router.route('/google/')
    .get(passport.authenticate('google', {
        scope:['email profile']
    }));

router.route('/facebook/callback').get(passport.authenticate('facebook', {
        failureRedirect: '/error'
    }), function(req, res) {
        // here everything works. req.user is correctly set and req.isAuthenticated() is true
        console.log('req.user', req.user);
        res.redirect('/profile');
        
    });
    
router.route('/facebook/')
        .get(passport.authenticate('facebook', {
            scope:'email'
        }));

module.exports = router;