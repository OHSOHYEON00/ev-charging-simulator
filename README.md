# Charging Simulation - README

## Overview
This project provides a simulation tool for a shop owner to estimate the total energy consumption and peak power load based on the number of charging points installed, the number of cars arriving for charging, and various parameters related to the charging stations.

The goal is to create an input form for simulation parameters and display the results in an easy-to-understand and visually appealing way.


## Features
- Input Parameters:
  - Number of charging points
  - Arrival probability multiplier (for increasing the number of cars arriving to charge)
  - Consumption of each car (default: 18kWh)
  - Charging power per charging point (default: 11kW)

- Output Visualization:
  - Aggregated charging values per charging point
  - Total energy charged (in kWh)
  - Number of charging events per different time periods (day, week, month, year)
  - Maximum actual power demand and energy consumed per day/week/month
- Bonus Feature:
  - UI to allow the creation of different types of charging points (e.g., 5 x 11kW, 3 x 22kW, 1 x 50kW).

## Installation & Setup

### Prerequisites
- Node.js (v16.0 or higher) installed on your system.
- npm (comes with Node.js) or Yarn installed.

### Steps
1. Install Dependencies:
```
npm install
```
Or with Yarn:
```
yarn install
```

2. Run the Development Server:
   
To start the development server, run:
```

npm start
```
Or with Yarn:
```
yarn start
```

## Folder Structure
The project follows a simple structure:

```
/src
  /components       # React components for form and output display
  /utils            # Utility functions for calculation and data generation
  App.tsx           # Main React app file
  index.tsx         # Entry point for React
/public
  index.html        # HTML template
/package.json       # Project dependencies and scripts
```

## Usage Instructions

Once the application is running, the you can:

1. Enter the following values as numbers. If the values do not meet validation requirements, an error message will be displayed at the top of the form.
<img width="1500" alt="Screenshot 2024-12-15 at 17 11 43" src="https://github.com/user-attachments/assets/2cdd41d4-9158-4791-a922-3a571967cece" />
2. Click "Simulate" button for submitting form.

3. View the precomputed outputs - The result values are contained within Collapses for easy access to necessary information. Please open the relevant sections to view the information you need.
<img width="1580" alt="Screenshot 2024-12-15 at 17 19 06" src="https://github.com/user-attachments/assets/7a6d47f2-bf6d-4ca6-b558-3fb335d4cc7e" />


## Results - Screenshots

These screenshots are provided as a preview of the service.
<img width="1624" alt="Screenshot 2024-12-15 at 17 20 06" src="https://github.com/user-attachments/assets/42b4a5a9-e8e4-444d-b49d-305075dbab1b" />
<img width="1624" alt="Screenshot 2024-12-15 at 17 20 33" src="https://github.com/user-attachments/assets/e3d60ec3-e7f2-49d3-95de-8fd5021078b0" />
<img width="1624" alt="Screenshot 2024-12-15 at 17 20 41" src="https://github.com/user-attachments/assets/f47d5f4f-dabf-4ab1-b53e-8e64e97b7e9d" />
<img width="1580" alt="Screenshot 2024-12-15 at 17 20 55" src="https://github.com/user-attachments/assets/28dc7638-e54f-47c4-8f12-8428101aa678" />


