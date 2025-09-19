# Sales Analytics Dashboard

This project is a Sales Analytics Dashboard built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides insights into sales data through various metrics and visualizations.

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

## Features

- **Date Range Filtering**: Users can select a date range to filter sales data.
- **Data Aggregation**: The dashboard aggregates data to show total revenue, top products, and customer insights.
- **Interactive Charts**: Visualizations are provided using charts for better data representation.
- **Responsive Design**: The application is designed to be mobile-friendly.

## Getting Started

### Prerequisites

- Node.js
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd sales-analytics-dashboard
   ```

2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```

4. Set up your environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

5. Seed the database with sample data:
   ```
   cd ../backend
   node utils/seed.js
   ```

6. Start the backend server:
   ```
   npm start
   ```

7. Start the frontend application:
   ```
   cd ../frontend
   npm start
   ```

### Usage

- Access the application at `http://localhost:3000`.
- Use the dashboard to view sales metrics and generate reports.

## API Endpoints

The backend provides several API endpoints for data retrieval and manipulation. Refer to the backend README for detailed API documentation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.