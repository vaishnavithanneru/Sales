const AnalyticsReport = require('../models/analyticsReport');
const Sales = require('../models/sales');

// Aggregate total revenue by date range
exports.aggregateRevenue = async (req, res) => {
    const { startDate, endDate } = req.body;

    try {
        const totalRevenue = await Sales.aggregate([
            {
                $match: {
                    reportDate: {
                        $gte: new Date(startDate),
                        $lte: new Date(endDate)
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: '$totalRevenue' },
                    totalOrders: { $sum: '$quantity' },
                    avgOrderValue: { $avg: '$totalRevenue' }
                }
            }
        ]);

        res.status(200).json(totalRevenue[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error aggregating revenue', error });
    }
};

// Generate analytics report
exports.generateReport = async (req, res) => {
    const { startDate, endDate } = req.body;

    try {
        const reportData = await Sales.aggregate([
            {
                $match: {
                    reportDate: {
                        $gte: new Date(startDate),
                        $lte: new Date(endDate)
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: '$totalRevenue' },
                    totalOrders: { $sum: '$quantity' },
                    avgOrderValue: { $avg: '$totalRevenue' },
                    topProducts: { $push: '$productId' }
                }
            }
        ]);

        const report = new AnalyticsReport({
            reportDate: new Date(),
            startDate: new Date(startDate),
            endDate: new Date(endDate),
            totalOrders: reportData[0]?.totalOrders || 0,
            totalRevenue: reportData[0]?.totalRevenue || 0,
            avgOrderValue: reportData[0]?.avgOrderValue || 0,
            topProducts: reportData[0]?.topProducts || [],
            createdAt: new Date()
        });

        await report.save();
        res.status(201).json(report);
    } catch (error) {
        res.status(500).json({ message: 'Error generating report', error });
    }
};