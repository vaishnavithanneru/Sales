const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Create a new customer
router.post('/', customerController.createCustomer);

// Get all customers
router.get('/', customerController.getAllCustomers);

// Get a customer by ID
router.get('/:id', customerController.getCustomerById);

// Update a customer by ID
router.put('/:id', customerController.updateCustomerById);

// Delete a customer by ID
router.delete('/:id', customerController.deleteCustomerById);

module.exports = router;