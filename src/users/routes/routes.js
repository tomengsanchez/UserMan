
const userController = require('../controller/controller');


exports.getUsers = userController.getList;
exports.addUsers = userController.addUsers;
exports.getRoles = userController.getRoles;