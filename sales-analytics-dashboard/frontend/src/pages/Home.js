import React from 'react';
import Dashboard from '../components/Dashboard';
import DateRangePicker from '../components/DateRangePicker';

const Home = () => {
    return (
        <div>
            <h1>Sales Analytics Dashboard</h1>
            <DateRangePicker />
            <Dashboard />
        </div>
    );
};

export default Home;