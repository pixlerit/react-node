const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: {type: String, unique: true, lowercase: true},
    password: String,
    initials: {
        type: String,
        default: ""
    },
    roles: {
        type: Array,
        default: ['authenticated']
    },
    provider: {
        type: String,
        default: 'local'
    },
    company_id: {

        type: String,
        default: ""
    },
      sync_calendar: {

    type: Boolean,
    default: false
    },
    is_admin: {

        type: Boolean,
        default: false
    },
    manipulator_stamp:{
        type: Number,
        default:0
    },
    logon_time: {
        type: Number,
        default: 0
    },
    email_updates: {
        type: Number,
        //defaul twice a week value
        default: 3
    },
    email_tasking: {

        type: Boolean,
        default: false
    },
    gcal_authenticated: {

        type: Number,
        default: 0
    },
    avatar: {

        type: String,
        default: "avatar.png"
    },
    about_me: {

        type: String,
        default: ""
    },
    blocked_rules: {
    
        type: Array,
        default: []
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

//on save hook , encrypt password
userSchema.pre('save', function(next) {
    const user = this;

    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }

        bcrypt.hash(user.password, salt, null, function(err,hash) {
          if (err) { return next(err); }
          
          user.password = hash;
          next();

        }); 
    });
});
userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if  (err) { return callback(err); } 
        callback(null, isMatch);
    });
}

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;