const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    cartId: {
        type: String,
        default: ""
    },
    modelId: {
        type: String,
        default: ""
    },
    adId: {
        type: String,
        default: ""
    },
    quantity: {
        type: Number,
        default: 0
    },
    price: {
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

const ModelClass = mongoose.model('cart_item', cartItemSchema);

module.exports = ModelClass;