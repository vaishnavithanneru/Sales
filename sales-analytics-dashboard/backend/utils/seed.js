const mongoose = require('mongoose');
const Customer = require('../models/customer');
const Product = require('../models/product');
const Sales = require('../models/sales');

const seedDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost/salesdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Clear existing data
        await Customer.deleteMany({});
        await Product.deleteMany({});
        await Sales.deleteMany({});

        // Sample customers
        const customers = [
            { name: 'John Doe', region: 'North', type: 'Individual' },
            { name: 'Jane Smith', region: 'South', type: 'Business' },
            { name: 'Alice Johnson', region: 'East', type: 'Individual' },
            { name: 'Bob Brown', region: 'West', type: 'Business' },
        ];

        // Sample products
        const products = [
            { name: 'Product A', category: 'Category 1', price: 100 },
            { name: 'Product B', category: 'Category 2', price: 200 },
            { name: 'Product C', category: 'Category 1', price: 150 },
            { name: 'Product D', category: 'Category 3', price: 250 },
        ];

        // Insert customers and products
        await Customer.insertMany(customers);
        await Product.insertMany(products);

        // Sample sales
        const sales = [
            { productId: '1', customerId: '1', quantity: 2, totalRevenue: 200, reportDate: new Date('2022-01-15') },
            { productId: '2', customerId: '2', quantity: 1, totalRevenue: 200, reportDate: new Date('2022-02-20') },
            { productId: '3', customerId: '3', quantity: 3, totalRevenue: 450, reportDate: new Date('2022-03-10') },
            { productId: '4', customerId: '4', quantity: 1, totalRevenue: 250, reportDate: new Date('2022-04-05') },
        ];

        // Insert sales
        await Sales.insertMany(sales);

        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();