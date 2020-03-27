const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modelSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    brandId : {type: Schema.Types.ObjectId, ref: 'brand'},
    description: {
        type: String,
        default: ""
    },
    imageUrl: {
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

const ModelClass = mongoose.model('model', modelSchema);

module.exports = ModelClass;