const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specSchema = new Schema({
    modelId: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    value: {
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

const ModelClass = mongoose.model('spec', specSchema);

module.exports = ModelClass;