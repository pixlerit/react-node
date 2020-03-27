'use strict';

require('../models/category');
require('../models/brand');
require('../models/model');

const mongoose = require('mongoose');
const async = require('async');
const categories = mongoose.model('category');
const brands = mongoose.model('brand');
const models = mongoose.model('model');
const _ = require('lodash');
import { LIMITITEMCOUNT } from './config';



export function getAllCategories (req, res) {
    var allCateogires = [];
    var allModels = [];
    
    async.series([
                    function(callback) {
                        categories.find({}).exec(function (err, categoryList) {

                            if (err) return callback(err);
                            allCateogires = categoryList;
                            callback();
                       
                    });
                    },
                    function(callback) {
                        models.find({}).populate('brandId').exec(function (err, modelList) {
                            
                            if (err) return callback(err);
                            allModels = modelList;
                            callback();
                            
                                             
                        });

                    }
                ], function(err){
                    if (err) {
                        
                        console.log(err);                
                    }
                    res.jsonp({ categories: allCateogires, models: allModels });
                });
   
    
    
};

exports.getAllBrands = function (req, res) {

    models.find({}).populate('brandId').exec(function (err, project) {
        
        if (err) {
        
            console.log(err);
        
                        } else {
        
            
        
                                res.jsonp(project);
                        }
        
                         
                    });
    
    };

exports.getAllModels = function(req, res) {
    var allBrand = [];
    var brandIds = [];
    var myModels = [];
    var count = 0;
   
    async.series([
        function(callback) {

            brands.find({ categoryId: req.params.categoryId }, function (err, allBrands) {
                allBrand = allBrands;
                callback();
            });

        },
        function(callback) {
            _.forEach(allBrand, function(brand){
                brandIds.push(""+brand._id+"");
            });
            models.find({'brandId':  { $in: brandIds } }).limit(20).exec(function (err, data){
                if (err) {
                    console.log(err);
                    
                } else {
                    
                    myModels = data;
                    callback();

                }
                    
                                     
            });
        
        },
        function(callback) {

            models.count({'brandId':  { $in: brandIds }}, function (err, length) {
                if (err) {
                    console.log(err);
                }
                count = length;
                callback();
            });
        }

       
    ], function(err){
          
        if (err) {
            console.log(err);
            
        } 
        else {
            
            res.jsonp({allBrand, myModels, count,brandIds});
        }
    });
}

exports.loadMoreModels = function(req, res) {

    var moreModels = [];
    var brandIds = [];
    
    async.series([
        function(callback){
            
            brands.find({ categoryId: req.params.categoryId }, function (err, allBrands) {

                _.forEach(allBrands, function(brand){
                    brandIds.push(""+brand._id+"");
                });
                callback();
            });
        },
        function(callback) {
            const skip = parseInt(req.params.skip);
            models.find({'brandId':  { $in: brandIds } }).skip(skip).limit(LIMITITEMCOUNT).exec(function (err, data){
                if (err) {
                    console.log(err);
                    
                } else {
                    
                    moreModels = data;
                    callback();
        
                }
                    
                                     
            });
           
        }
    ],function(err){
           
        if (err) {
            console.log(err);
            
        } 
        else {
            console.log(moreModels);
            res.jsonp({models:moreModels});
        }
    })
  
    
}

exports.getAllModelsNew = function(req, res) {
    var allBrand = [];
    var brandIds = [];
    var myModels = [];
    var count = 0;
   
    async.series([
        function(callback) {

            brands.find({ categoryId: req.params.categoryId }, function (err, allBrands) {
                allBrand = allBrands;
                callback();
            });

        },
        function(callback) {
            _.forEach(allBrand, function(brand){
                brandIds.push(""+brand._id+"");
            });
            models.find({'brandId':  { $in: brandIds } }).exec(function (err, data){
                if (err) {
                    console.log(err);
                    
                } else {
                    
                    myModels = data;
                    callback();

                }
                    
                                     
            });
        
        },
        function(callback) {

            models.count({'brandId':  { $in: brandIds }}, function (err, length) {
                if (err) {
                    console.log(err);
                }
                count = length;
                callback();
            });
        }

       
    ], function(err){
          
        if (err) {
            console.log(err);
            
        } 
        else {
            
            res.jsonp({allBrand, myModels, count,brandIds});
        }
    });
}

exports.getAllModelsNewBySub = function(req, res) {
    console.log('req.params', req.params);
    var allBrand = [];
    var brandIds = [];
    var myModels = [];
    var count = 0;
   
    async.series([
        function(callback) {
            console.log(req.params.subCatId);
            brands.find({ subCategoryId: req.params.subCatId }, function (err, allBrands) {
                allBrand = allBrands;
                callback();
            });

        },
        function(callback) {
            _.forEach(allBrand, function(brand){
                brandIds.push(""+brand._id+"");
            });
            models.find({'brandId':  { $in: brandIds } }).exec(function (err, data){
                if (err) {
                    console.log(err);
                    
                } else {
                    
                    myModels = data;
                    callback();

                }
                    
                                     
            });
        
        },
        function(callback) {

            models.count({'brandId':  { $in: brandIds }}, function (err, length) {
                if (err) {
                    console.log(err);
                }
                count = length;
                callback();
            });
        }

       
    ], function(err){
          
        if (err) {
            console.log(err);
            
        } 
        else {
            
            res.jsonp({allBrand, myModels, count,brandIds});
        }
    });
}