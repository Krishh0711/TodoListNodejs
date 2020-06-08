const express =  require('express');

const router = express.Router();

const userController = require('../controllers/user_controller');

console.log('user route started');
router.post('/add-task',userController.addTask);

module.exports = router;