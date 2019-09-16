const router = require("express").Router();

//const {requireSignin, isAuth} = require("../controllers/auth");
//const {userById} = require('../controllers/user');
const {generateToken, processPayment} = require('../../controllers/braintreeController');

router.get('/getToken/:userId', generateToken );
router.post('/payment/:userId', processPayment );


//router.param('userId', userById);


module.exports = router;