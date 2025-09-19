import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ReportsTable = ({ reports }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Report Date</TableCell>
                        <TableCell>Start Date</TableCell>
                        <TableCell>End Date</TableCell>
                        <TableCell>Total Orders</TableCell>
                        <TableCell>Total Revenue</TableCell>
                        <TableCell>Average Order Value</TableCell>
                        <TableCell>Top Products</TableCell>
                        <TableCell>Top Customers</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {reports.map((report) => (
                        <TableRow key={report._id}>
                            <TableCell>{new Date(report.reportDate).toLocaleDateString()}</TableCell>
                            <TableCell>{new Date(report.startDate).toLocaleDateString()}</TableCell>
                            <TableCell>{new Date(report.endDate).toLocaleDateString()}</TableCell>
                            <TableCell>{report.totalOrders}</TableCell>
                            <TableCell>{report.totalRevenue.toFixed(2)}</TableCell>
                            <TableCell>{(report.totalRevenue / report.totalOrders).toFixed(2)}</TableCell>
                            <TableCell>{report.topProducts.join(', ')}</TableCell>
                            <TableCell>{report.topCustomers.join(', ')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ReportsTable;