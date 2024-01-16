const express = require('express');
const authController = require('../controllers/authController.js')
const router = express.Router();

router.post('/Login',authController.loginUser);
router.get('/users',authController.getallUsers);
router.post('/Registration',authController.registerUser);

module.exports = router;