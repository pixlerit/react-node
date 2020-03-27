const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishListSchema = new Schema({
    userId: {
        type: String,
        default: ""
    },
    adId: {
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

const ModelClass = mongoose.model('wish_list', wishListSchema);

module.exports = ModelClass;