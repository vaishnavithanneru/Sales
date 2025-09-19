const Sales = require('../models/sales');

// Create a new sale
exports.createSale = async (req, res) => {
    const { productId, customerId, quantity, totalRevenue, reportDate } = req.body;

    try {
        const newSale = new Sales({ productId, customerId, quantity, totalRevenue, reportDate });
        await newSale.save();
        res.status(201).json(newSale);
    } catch (error) {
        res.status(500).json({ message: 'Error creating sale', error });
    }
};

// Fetch all sales
exports.getSales = async (req, res) => {
    try {
        const sales = await Sales.find().populate('productId customerId');
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sales', error });
    }
};

// Aggregate sales data by date range
exports.aggregateSales = async (req, res) => {
    const { startDate, endDate } = req.body;

    try {
        const aggregatedData = await Sales.aggregate([
            {
                $match: {
                    reportDate: { $gte: new Date(startDate), $lte: new Date(endDate) }
                }
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: '$totalRevenue' },
                    totalQuantity: { $sum: '$quantity' },
                    totalSales: { $count: {} }
                }
            }
        ]);
        res.status(200).json(aggregatedData[0] || { totalRevenue: 0, totalQuantity: 0, totalSales: 0 });
    } catch (error) {
        res.status(500).json({ message: 'Error aggregating sales data', error });
    }
};