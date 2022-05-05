const express = require('express');
const multer = require('../middleware/multerPostConfig');


const router = express.Router();

const postCtrl = require('../controllers/post');

router.post('/add', multer, postCtrl.createPost);

router.get('/all', postCtrl.allPost);

router.post('/like/:id', postCtrl.likePost);

router.delete('/delete/:id', postCtrl.deletePost);



module.exports = router;