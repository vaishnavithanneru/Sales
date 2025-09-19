# Sales Analytics Dashboard - Backend Documentation

## Overview

The Sales Analytics Dashboard is a full-stack application built using the MERN stack (MongoDB, Express.js, React, Node.js). This backend documentation provides an overview of the backend structure, API endpoints, and setup instructions.

## Project Structure

```
backend/
├── models/
│   ├── customer.js          # Mongoose model for customers
│   ├── product.js           # Mongoose model for products
│   ├── sales.js             # Mongoose model for sales
│   └── analyticsReport.js    # Mongoose model for analytics reports
├── controllers/
│   ├── analyticsController.js # Controller for analytics-related requests
│   ├── customerController.js  # Controller for customer-related requests
│   ├── productController.js   # Controller for product-related requests
│   └── salesController.js     # Controller for sales-related requests
├── routes/
│   ├── analytics.js           # Routes for analytics API endpoints
│   ├── customer.js            # Routes for customer API endpoints
│   ├── product.js             # Routes for product API endpoints
│   └── sales.js               # Routes for sales API endpoints
├── middlewares/
│   └── errorHandler.js        # Middleware for error handling
├── config/
│   └── db.js                  # Database connection logic
├── utils/
│   └── seed.js                # Database seeding logic
├── server.js                   # Entry point of the backend application
└── README.md                   # This documentation file
```

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd sales-analytics-dashboard/backend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root of the backend directory and add the following variables:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   PORT=5000
   ```

4. **Seed the Database (Optional)**
   To populate the database with sample data, run:
   ```
   node utils/seed.js
   ```

5. **Start the Server**
   ```
   npm start
   ```

## API Endpoints

### Analytics Endpoints
- **GET /api/analytics/revenue**
  - Description: Get total revenue based on date range.
  - Query Parameters: `startDate`, `endDate`

### Customer Endpoints
- **GET /api/customers**
  - Description: Retrieve all customers.
- **POST /api/customers**
  - Description: Create a new customer.

### Product Endpoints
- **GET /api/products**
  - Description: Retrieve all products.
- **POST /api/products**
  - Description: Create a new product.

### Sales Endpoints
- **GET /api/sales**
  - Description: Retrieve all sales records.
- **POST /api/sales**
  - Description: Create a new sale.

## Error Handling

All errors are handled by the `errorHandler` middleware. It captures any errors that occur during request processing and returns a standardized error response.

## Conclusion

This backend documentation provides a comprehensive overview of the backend structure and setup for the Sales Analytics Dashboard. For further details on the frontend, please refer to the frontend README.md file.