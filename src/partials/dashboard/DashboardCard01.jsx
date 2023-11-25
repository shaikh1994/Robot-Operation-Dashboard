import React from 'react';
import BarChart from '../../charts/BarChart01';
import { tailwindConfig } from '../../utils/Utils';
import mockData from '../../data/mockData.json';

function DashboardCard01() {

  const dates = mockData.distanceCovered
    .filter((item, index) => index < 5) 
    .map(item => item.date); 

  const robotColors = [
    tailwindConfig().theme.colors.blue[400],
    tailwindConfig().theme.colors.green[400],
    tailwindConfig().theme.colors.red[400],
    tailwindConfig().theme.colors.yellow[400],
    tailwindConfig().theme.colors.indigo[400],
    
  ];

  const chartData = {
    labels: dates,
    datasets: Object.keys(mockData.robotEfficiency).map((robotId, index) => ({
      label: robotId,
      data: mockData.distanceCovered
        .filter(item => item.robotId === robotId)
        .map(item => parseInt(item.distance)), // Extract distance and convert to integers
      backgroundColor: robotColors[index % robotColors.length], // Assign colors based on index
      hoverBackgroundColor: robotColors[index % robotColors.length], // Assign hover colors
      barPercentage: 0.66,
      categoryPercentage: 0.66,
    })),
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Distance Covered Each Day</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard01;
