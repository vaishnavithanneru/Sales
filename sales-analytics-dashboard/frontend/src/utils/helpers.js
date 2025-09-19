const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};

const calculateTotalRevenue = (sales) => {
    return sales.reduce((total, sale) => total + sale.totalRevenue, 0);
};

const getTopProducts = (sales, limit = 5) => {
    const productSales = sales.reduce((acc, sale) => {
        acc[sale.productId] = (acc[sale.productId] || 0) + sale.quantity;
        return acc;
    }, {});

    return Object.entries(productSales)
        .sort(([, a], [, b]) => b - a)
        .slice(0, limit)
        .map(([productId]) => productId);
};

const getAverageOrderValue = (totalRevenue, totalOrders) => {
    return totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;
};

export { formatDate, calculateTotalRevenue, getTopProducts, getAverageOrderValue };