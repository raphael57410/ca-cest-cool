const express = require('express');

const router = express.Router();

const userCtrl = require('../controllers/user');
const loginMiddleware = require('../middleware/loginMiddleware');


router.post('/login', [loginMiddleware], userCtrl.user);

router.post('/add', userCtrl.createUser);

router.patch('/update', userCtrl.updateUser);

//TODO: voir si besoin de cette route
// router.get('/current/:id', userCtrl.getCurrentUser);


module.exports = router;