const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        default: ""
    },
    isSubCategory: {
        id: Number,
        type: Boolean,
        default: false
    },
    subCategories: [{
        id: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            default: ""
        },
        description: {
            type: String,
            default: ""
        }

    }],
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    dateUpdated: {
        type: Date,
        default: Date.now()
    }
  
});

const ModelClass = mongoose.model('category', categorySchema);

module.exports = ModelClass;