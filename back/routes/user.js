const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/login', userCtrl.user);

router.post('/add', userCtrl.createUser);


module.exports = router;