const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

// Route to get aggregated revenue data
router.get('/revenue', analyticsController.aggregateRevenue);

// Route to get analytics reports
router.get('/reports', analyticsController.getReports);

// Route to create a new analytics report
router.post('/reports', analyticsController.createReport);

module.exports = router;