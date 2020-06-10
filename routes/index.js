const express =  require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

//home route
router.get('/', homeController.home);


//user route
router.use('/users',require('./users'));
module.exports = router;