const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adSpecSchema = new Schema({
    adId: {
        type: String,
        default: ""
    },
    specId: {
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

const ModelClass = mongoose.model('ad_spec', adSpecSchema);

module.exports = ModelClass;