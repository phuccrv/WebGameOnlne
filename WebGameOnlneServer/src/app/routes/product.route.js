const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

router.get('/', ProductController.getAllGames);
router.get('/:id', ProductController.getOneGame)

module.exports = router;