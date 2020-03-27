const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const conditionSchema = new Schema({
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

const ModelClass = mongoose.model('condition', conditionSchema);

module.exports = ModelClass;