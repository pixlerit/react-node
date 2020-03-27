const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adSchema = new Schema({
    userId: {
        type: String,
        default: ""
    },
    modelId: {
        type: String,
        default: ""
    },
    price: {
        type: String,
        default: ""
    },
    conditionId: {
        type: String,
        default: ""
    },
    isOriginalOwner: {
        type: Boolean,
        default: false
    },
    isRefurbished: {
        type: Boolean,
        default: false
    },
    statusId: {
        type: String,
        default: ""
    },
    imei: {
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

const ModelClass = mongoose.model('ad', adSchema);

module.exports = ModelClass;