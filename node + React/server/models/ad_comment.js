const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adcommentSchema = new Schema({
    adId: {
        type: String,
        default: ""
    },
    userId: {
        type: String,
        default: ""
    },
    comment: {
        type: String,
        default: ""
    },
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    dateUpdated: {
        type: Date,
        default: Date.now()
    }
});

const ModelClass = mongoose.model('ad_comment', adcommentSchema);

module.exports = ModelClass;