const passport = require('passport');

require('./jwtStrategy');
require('./localStrategy');
require('./googleStrategy')();
require('./facebookStrategy')();

module.exports = passport;
