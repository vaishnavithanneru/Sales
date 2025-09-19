import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Sales Data',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Sales Chart</h2>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default ChartComponent;