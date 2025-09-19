# Sales Analytics Dashboard

## Overview

The Sales Analytics Dashboard is a full-stack application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project aims to provide insights into sales data through an interactive dashboard that allows users to filter data by date ranges, visualize key metrics, and generate reports.

## Features

- **Date Range Filtering**: Users can select a start and end date to filter sales data.
- **Data Aggregation**: The application aggregates sales data to provide metrics such as total revenue, average order value, and top products/customers.
- **Interactive Charts and Tables**: Visualizations are created using charts to represent sales trends and metrics.
- **Responsive Design**: The dashboard is designed to be mobile-friendly and accessible on various devices.
- **Error Handling**: The application includes error handling for API requests and user inputs.

## Project Structure

```
sales-analytics-dashboard
├── backend
│   ├── models
│   ├── controllers
│   ├── routes
│   ├── middlewares
│   ├── config
│   ├── utils
│   ├── server.js
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── utils
│   │   ├── hooks
│   │   ├── App.js
│   │   └── README.md
│   ├── public
│   │   └── index.html
│   ├── package.json
│   └── README.md
├── .env.example
├── README.md
└── package.json
```

## Backend

The backend is built using Node.js and Express.js. It connects to a MongoDB database and provides RESTful API endpoints for managing customers, products, sales, and analytics.

### Models

- **Customer**: Defines the schema for customer data.
- **Product**: Defines the schema for product data.
- **Sales**: Defines the schema for sales transactions.
- **AnalyticsReport**: Defines the schema for storing aggregated analytics data.

### Controllers

- **AnalyticsController**: Handles requests related to analytics and data aggregation.
- **CustomerController**: Manages customer-related operations.
- **ProductController**: Manages product-related operations.
- **SalesController**: Manages sales-related operations.

### Routes

The backend defines routes for each resource, connecting them to their respective controllers.

## Frontend

The frontend is built using React and provides a user-friendly interface for interacting with the backend APIs.

### Components

- **Dashboard**: Displays key metrics and visualizations.
- **DateRangePicker**: Allows users to select a date range for filtering data.
- **MetricsCard**: Displays individual metrics in a card format.
- **ReportsTable**: Shows a table of previously generated reports.
- **ChartComponent**: Visualizes data using charts.

### Pages

- **Home**: The main landing page of the application.
- **ReportsHistory**: Displays a history of generated reports.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd sales-analytics-dashboard
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file based on the `.env.example` file and configure your MongoDB connection.
   - Seed the database (if applicable):
     ```
     node utils/seed.js
     ```
   - Start the server:
     ```
     node server.js
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Start the React application:
     ```
     npm start
     ```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Thanks to the contributors and libraries that made this project possible.