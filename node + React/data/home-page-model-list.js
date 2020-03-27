db.models.aggregate(
[
      { "$sort": { "brandId":1, "releaseDate":-1 } },
      { "$group": {
        "_id": "$brandId",
        "models": { "$push": "$$ROOT" } 
      }},
      {
          "$lookup": {
                from: "brands",
                localField: "_id",
                foreignField: "_id",
                as: "brand_models"
              } 
      },
      { $unwind: "$brand_models" },
      { 
          "$project": 
          {
              "_id": 1,
              "categoryId" : "$brand_models.categoryId",
              "subCategoryId" : "$brand_models.subCategoryId",
              "models": { "$slice": [ "$models", "$brand_models.homePageItemCount" ] }
          }
      },
      { 
          "$addFields": 
          {
            "models.categoryId" : "$categoryId",
            "models.subCategoryId" : "$subCategoryId"
          }
      },
      { $unwind: "$models" },
      { 
          "$project": 
          {
              "_id": 0,
              "brandId" : "$models.brandId",
              "modelId" : "$models._id",
              "categoryId" : "$models.categoryId",
              "subCategoryId" : "$models.subCategoryId",
              "name" : "$models.name",
              "description" : "$models.description",
              "imageUrl" : "$models.imageUrl",
              "releaseDate" : "$models.releaseDate"
          }
      },
      {
          "$lookup": {
                from: "ads",
                localField: "modelId",
                foreignField: "modelId",
                as: "model_price"
              } 
      },
      {
        $unwind: { path: "$model_price", preserveNullAndEmptyArrays : true }
      },
      { 
          "$addFields": 
          {
            "price" : "$model_price.price"
          }
      },
      { "$group": {
        "_id": "$modelId",
        "brandId": { "$first": "$brandId" },
        "categoryId" : { "$first": "$categoryId" } ,
        "subCategoryId" : { "$first": "$subCategoryId" },
        "name" : { "$first": "$name" },
        "description" : { "$first": "$description" },
        "minPrice" : { $min: "$price" }, 
        "releaseDate" : { "$first": "$releaseDate" },
        "imageUrl" : { "$first" : "$imageUrl" }
      }}
]
)