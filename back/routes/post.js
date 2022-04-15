const express = require('express');

const router = express.Router();

const postCtrl = require('../controllers/post');

router.post('/add', postCtrl.createPost);

router.get('/all', postCtrl.allPost);

router.delete('/delete', postCtrl.deletePost);



module.exports = router;