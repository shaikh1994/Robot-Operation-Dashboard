import React from 'react';
import LineChart from '../../charts/LineChart02';
import { tailwindConfig } from '../../utils/Utils';
import mockData from '../../data/mockData.json';

function DashboardCard05() {
  const distanceCoveredData = mockData.distanceCovered;
  const robotColors = [
    tailwindConfig().theme.colors.blue[400],
    tailwindConfig().theme.colors.green[400],
    tailwindConfig().theme.colors.red[400],
    tailwindConfig().theme.colors.yellow[400],
    tailwindConfig().theme.colors.indigo[400],
    // Add more colors as needed
  ];

  // Create a map of robot IDs to their respective colors
  const robotColorMap = {};
  mockData.citiesCovered.forEach((data, index) => {
    robotColorMap[data.robotId] = robotColors[index % robotColors.length];
  });

  const chartData = {
    labels: distanceCoveredData.map(data => data.date),
    datasets: mockData.citiesCovered.map(data => {
      return {
        label: `Robot ${data.robotId}`,
        data: distanceCoveredData
          .filter(item => item.robotId === data.robotId)
          .map(item => parseInt(item.distance, 10)),
        borderColor: robotColorMap[data.robotId],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: robotColorMap[data.robotId],
        pointHoverBackgroundColor: robotColorMap[data.robotId],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      };
    }),
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Sales Over Time (all stores)</h2>
      </header>
      {/* Chart using Chart.js */}
      {/* Adjust the chart's height by modifying the height attribute */}
      <LineChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard05;
