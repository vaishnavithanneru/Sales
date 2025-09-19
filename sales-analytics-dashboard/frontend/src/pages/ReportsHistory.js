import React, { useEffect, useState } from 'react';
import ReportsTable from '../components/ReportsTable';
import { fetchReports } from '../services/api';

const ReportsHistory = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getReports = async () => {
            try {
                const data = await fetchReports();
                setReports(data);
            } catch (err) {
                setError('Failed to fetch reports');
            } finally {
                setLoading(false);
            }
        };

        getReports();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h1>Reports History</h1>
            <ReportsTable reports={reports} />
        </div>
    );
};

export default ReportsHistory;