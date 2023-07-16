const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');


router.get('/', ProductController.getAllGames);
router.get('/:id', ProductController.getOneGame);
router.post('/cart', ProductController.addToCart);
router.get('/cart-user/:id', ProductController.getDetailCartUser);
router.delete('/cart/:idCart', ProductController.deleteDetailCartUser);
router.post('/payment/:id', ProductController.postPayment);
module.exports = router;
