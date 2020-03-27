const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    },
    categoryId: {
        type: Schema.Types.ObjectId
    },
    subCategoryId: {
        type:String,
        default: ""
    },
    models:[
        
        { type: Schema.Types.ObjectId, ref: 'model' }
    ],
    dateCreated: {
        type: Date,
        default: Date.now()
    },
    dateUpdated: {
        type: Date,
        default: Date.now()
    }
});

const ModelClass = mongoose.model('brand', brandSchema);

module.exports = ModelClass;