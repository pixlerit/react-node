const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
    // stars would be in string here because we can have 4.32 stars 
    stars: {
        type: String,
        default: ""
    },
    buyerId: {
        type: String,
        default: ""
    },
    sellerId: {
        type: String,
        default: ""
    },
    modelId: {
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

const ModelClass = mongoose.model('rating', ratingSchema);

module.exports = ModelClass;