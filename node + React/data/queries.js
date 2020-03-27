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
                as: "brands_models"
              } 
      },
      {
        $unwind: "$brands_models"
      },
      { "$project": {
        "models": { "$slice": [ "$models", "$brands_models.homePageItemCount" ] }
      }}
]
)