const express =  require('express');

const router = express.Router();

const userController = require('../controllers/user_controller');

//user/ route-name ......
router.post('/add-task',userController.addTask);
router.get('/delete-task',userController.deleteTask);
router.get('/mark-complete',userController.markComplete);
router.get('/mark-incomplete',userController.markInComplete);

module.exports = router;