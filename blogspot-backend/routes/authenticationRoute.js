const express = require('express');
const authController = require('../controllers/authController.js')
const router = express.Router();
const services = require('../services/render.js')

router.get('/',services.homeRoute);

router.get('/Login',authController.loginUser);
router.get('/users',authController.getallUsers);
router.post('/Registration',authController.registerUser);

module.exports = router;