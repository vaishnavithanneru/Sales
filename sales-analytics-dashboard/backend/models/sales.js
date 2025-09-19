const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalRevenue: {
        type: Number,
        required: true
    },
    reportDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Sales', salesSchema);