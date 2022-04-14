const express = require('express');

const router = express.Router();

const comentCtrl = require('../controllers/coment');

router.post('/add', comentCtrl.createComent);


module.exports = router;