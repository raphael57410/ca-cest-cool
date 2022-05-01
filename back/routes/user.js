const express = require('express');


const router = express.Router();

const userCtrl = require('../controllers/user');
const loginMiddleware = require('../middleware/loginMiddleware');
const changePassMiddleware = require('../middleware/changePassMiddleware');
const multer = require('../middleware/multerConfig');


router.post('/login', [loginMiddleware], userCtrl.user);

router.post('/add', multer, userCtrl.createUser);

router.put('/update/:id', multer, userCtrl.updateUser);

router.patch('/password', [changePassMiddleware], userCtrl.updatePassword);


//TODO: voir si besoin de cette route
// router.get('/current/:id', userCtrl.getCurrentUser);


module.exports = router;