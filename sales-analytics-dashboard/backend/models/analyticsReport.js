const mongoose = require('mongoose');

const analyticsReportSchema = new mongoose.Schema({
    reportDate: { type: Date, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    totalOrders: { type: Number, required: true },
    totalRevenue: { type: Number, required: true },
    avgOrderValue: { type: Number, required: true },
    topProducts: [{ productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, totalSales: Number }],
    topCustomers: [{ customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' }, totalSpent: Number }],
    regionWiseStats: [{ region: String, totalRevenue: Number }],
    categoryWiseStats: [{ category: String, totalRevenue: Number }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AnalyticsReport', analyticsReportSchema);