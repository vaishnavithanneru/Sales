# Sales Analytics Dashboard Frontend

This project is a Sales Analytics Dashboard built using the MERN stack (MongoDB, Express.js, React, Node.js). The dashboard provides insights into sales data, allowing users to filter by date ranges and visualize key metrics.

## Features

- **Date Range Filtering**: Users can select a start and end date to filter sales data.
- **Data Visualization**: Interactive charts and metrics display total revenue, top products, and more.
- **Responsive Design**: The application is designed to be mobile-friendly and accessible on various devices.
- **Reports History**: Users can view previously generated reports in a table format.

## Project Structure

```
frontend/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # Reusable components
│   │   ├── Dashboard.js    # Main dashboard component
│   │   ├── DateRangePicker.js # Component for selecting date ranges
│   │   ├── MetricsCard.js   # Component for displaying metrics
│   │   ├── ReportsTable.js   # Component for displaying reports history
│   │   └── ChartComponent.js  # Component for visualizing data with charts
│   ├── pages/              # Page components
│   │   ├── Home.js         # Main landing page
│   │   └── ReportsHistory.js # Page for viewing report history
│   ├── services/           # API service functions
│   │   └── api.js          # Functions for making API requests
│   ├── utils/              # Utility functions
│   │   └── helpers.js      # General helper functions
│   ├── hooks/              # Custom hooks
│   │   └── useFetch.js     # Hook for fetching data from the API
│   ├── App.js              # Main application component
│   └── README.md           # Documentation for the frontend
├── package.json             # Frontend dependencies and scripts
```

## Getting Started

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd sales-analytics-dashboard
   ```

2. **Navigate to the frontend directory**:
   ```
   cd frontend
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000` to view the dashboard.

## API Integration

The frontend communicates with the backend API to fetch sales data and generate reports. Ensure that the backend server is running and accessible.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.