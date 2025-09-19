import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const fetchRevenueData = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${API_URL}/revenue`, {
            params: { startDate, endDate }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching revenue data');
    }
};

export const fetchTopProducts = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${API_URL}/top-products`, {
            params: { startDate, endDate }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching top products');
    }
};

export const fetchTopCustomers = async (startDate, endDate) => {
    try {
        const response = await axios.get(`${API_URL}/top-customers`, {
            params: { startDate, endDate }
        });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching top customers');
    }
};

export const fetchReportsHistory = async () => {
    try {
        const response = await axios.get(`${API_URL}/reports`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching reports history');
    }
};