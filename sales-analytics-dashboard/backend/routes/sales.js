const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

// Route to create a new sale
router.post('/', salesController.createSale);

// Route to get all sales
router.get('/', salesController.getAllSales);

// Route to get sales by ID
router.get('/:id', salesController.getSaleById);

// Route to aggregate sales data
router.get('/aggregate', salesController.aggregateSalesData);

module.exports = router;