const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController.js')


router.post('/createPost',postController.createPost);
router.put('/updatePost' , postController.updatePost);
router.get('/getAllPosts',postController.getAllPost);
router.get('/getUserPosts',postController.getPost)

module.exports = router;