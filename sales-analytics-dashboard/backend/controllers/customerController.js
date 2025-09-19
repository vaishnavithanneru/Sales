const Customer = require('../models/customer');

// Create a new customer
exports.createCustomer = async (req, res) => {
    const { name, region, type } = req.body;

    try {
        const newCustomer = new Customer({ name, region, type });
        await newCustomer.save();
        res.status(201).json(newCustomer);
    } catch (error) {
        res.status(500).json({ message: 'Error creating customer', error });
    }
};

// Retrieve all customers
exports.getCustomers = async (req, res) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customers', error });
    }
};

// Retrieve a customer by ID
exports.getCustomerById = async (req, res) => {
    const { id } = req.params;

    try {
        const customer = await Customer.findById(id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customer', error });
    }
};

// Update a customer by ID
exports.updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { name, region, type } = req.body;

    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(id, { name, region, type }, { new: true });
        if (!updatedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(500).json({ message: 'Error updating customer', error });
    }
};

// Delete a customer by ID
exports.deleteCustomer = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCustomer = await Customer.findByIdAndDelete(id);
        if (!deletedCustomer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting customer', error });
    }
};