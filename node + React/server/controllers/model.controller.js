'use strict';

require('../models/category');
require('../models/brand');
require('../models/model');

const mongoose = require('mongoose');
const models = mongoose.model('model');

export function getModelsForHomePage (req, res) {  
    models.aggregate([
        { $sort: { brandId:1, releaseDate:-1 } },
        { $group: {
            _id: "$brandId",
            models: { $push: "$$ROOT" } 
        }},
        {
            $lookup: {
                    from: "brands",
                    localField: "_id",
                    foreignField: "_id",
                    as: "brand_models"
                } 
        },
        { $unwind: "$brand_models" },
        { 
            $project: 
            {
                _id: 1,
                categoryId : "$brand_models.categoryId",
                subCategoryId : "$brand_models.subCategoryId",
                models: { "$slice": [ "$models", "$brand_models.homePageItemCount" ] }
            }
        },
        { 
            $addFields: 
            {
                "models.categoryId" : "$categoryId",
                "models.subCategoryId" : "$subCategoryId"
            }
        },
        { $unwind: "$models" },
        { 
            $project: 
            {
                _id: 0,
                brandId : "$models.brandId",
                modelId : "$models._id",
                categoryId : "$models.categoryId",
                subCategoryId : "$models.subCategoryId",
                name : "$models.name",
                description : "$models.description",
                imageUrl : "$models.imageUrl",
                releaseDate : "$models.releaseDate"
            }
        },
        {
            $lookup: {
                    from: "ads",
                    localField: "modelId",
                    foreignField: "modelId",
                    as: "model_price"
                } 
        },
        { $unwind: { path: "$model_price", preserveNullAndEmptyArrays : true }},
        { 
            $project: 
            {
                brandId : "$brandId",
                modelId : "$modelId",
                categoryId : "$categoryId",
                subCategoryId : "$subCategoryId",
                name : "$name",
                description : "$description",
                imageUrl : "$imageUrl",
                releaseDate : "$releaseDate",
                price : "$model_price.price"
            }
        },
        { 
            $group: {
            _id: "$modelId",
            brandId: { "$first": "$brandId" },
            categoryId : { "$first": "$categoryId" } ,
            subCategoryId : { "$first": "$subCategoryId" },
            name : { "$first": "$name" },
            description : { "$first": "$description" },
            minPrice : { $min: "$price" }, 
            releaseDate : { "$first": "$releaseDate" },
            imageUrl : { "$first" : "$imageUrl" }
            }
        }
    ],
    function(err, models)
    {   
        if (err) return callback(err);
        res.jsonp({ models: models });
    }
);
}