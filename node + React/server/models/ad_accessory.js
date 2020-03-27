const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adAccessorySchema = new Schema({
    adId: {
        type: String,
        default: ""
    },
    accessoryId: {
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

const ModelClass = mongoose.model('ad_accessory', adAccessorySchema);

module.exports = ModelClass;