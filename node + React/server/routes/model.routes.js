'use strict';

const model = require('../controllers/model.controller');
import { Router } from 'express';
const router = new Router();

router.route('/models/getModelsForHomePage').get(model.getModelsForHomePage);

export default router;
