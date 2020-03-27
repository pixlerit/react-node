const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusScheme = new Schema({
    name: {
        type: String,
        default: ""
    },
    description: {
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

const ModelClass = mongoose.model('status', statusScheme);

module.exports = ModelClass;