import React, { useState, useEffect } from 'react';
import DateRangePicker from './DateRangePicker';
import MetricsCard from './MetricsCard';
import ReportsTable from './ReportsTable';
import ChartComponent from './ChartComponent';
import api from '../services/api';

const Dashboard = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [metrics, setMetrics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMetrics = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/analytics/revenue?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`);
                setMetrics(response.data);
            } catch (err) {
                setError(err.message);
            }
            setLoading(false);
        };

        fetchMetrics();
    }, [startDate, endDate]);

    return (
        <div>
            <h1>Sales Analytics Dashboard</h1>
            <DateRangePicker startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} />
            {loading && <p>Loading metrics...</p>}
            {error && <p>Error fetching metrics: {error}</p>}
            {metrics && (
                <>
                    <MetricsCard title="Total Revenue" value={metrics.totalRevenue} />
                    <MetricsCard title="Average Order Value" value={metrics.avgOrderValue} />
                    <ChartComponent data={metrics.topProducts} />
                    <ReportsTable reports={metrics.reports} />
                </>
            )}
        </div>
    );
};

export default Dashboard;