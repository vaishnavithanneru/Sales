import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MetricsCard = ({ title, value }) => {
    return (
        <Card variant="outlined" style={{ margin: '16px', flex: '1' }}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MetricsCard;