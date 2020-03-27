'use strict';

const category = require('../controllers/category.controller');
import { Router } from 'express';
const router = new Router();

//Get All Categories
router.route('/category').get(category.getAllCategories);
router.route('/category/getAllBrands').get(category.getAllBrands);
router.route('/category/getAllModels/:categoryId').get(category.getAllModels);
router.route('/category/getAllModelsNew/:categoryId').get(category.getAllModelsNew);
router.route('/category/getAllModelsNewBySub/:catId/:subCatId').get(category.getAllModelsNewBySub);
router.route('/category/loadMoreModels/:categoryId/:skip').get(category.loadMoreModels);

export default router;