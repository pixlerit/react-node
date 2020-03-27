import { Router } from 'express';
import * as UserController from '../controllers/user.controller';
const router = new Router();
const passportService = require('../authentication/passport');
const passport = require('passport');

const requireSignin = passport.authenticate('local', { session : false });

// Get all Posts
router.route('/users/signUp').post(UserController.signUp);
router.route('/users/signIn').post(requireSignin, UserController.signIn);
router.route('/users/getUser').get(requireSignin, UserController.signIn);


export default router;
