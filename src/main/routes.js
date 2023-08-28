const express = require('express');

const router = express.Router();
const controller = require('./main');

const usersRouter = require('../users/routes/routes');

// console.log(controller);
//Main
router.get('/',controller.main);


//user
router.get('/user',usersRouter.getUsers);
router.post('/user',usersRouter.addUsers);
router.get('/roles',usersRouter.getRoles);

module.exports = router;