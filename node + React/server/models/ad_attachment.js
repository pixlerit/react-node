const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adattachmentSchema = new Schema({
    adId: {
        type: String,
        default: ""
    },
    attachment: {
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

const ModelClass = mongoose.model('ad_attachment', adattachmentSchema);

module.exports = ModelClass;