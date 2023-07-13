const express = require('express');
const UserController = require('../controllers/user.controller');
const checkAuthentication = require('../middlewares/checkAuth');
const router = express.Router();

router.post('/login', UserController.handleLogin);
router.post('/register', UserController.handleRegister);
router.get('/get-user', checkAuthentication, UserController.handleGetUser);//dùng cho admin
router.get('/', (req, res) => {
  res.json('Ok');
});

module.exports = router;
