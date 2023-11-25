import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';
import { tailwindConfig } from '../../utils/Utils';
import mockData from '../../data/mockData.json';

function DashboardCard03() {
  // Extracting robot names and cities covered from mockData
  const robotsData = mockData.citiesCovered.map((robot) => ({
    label: robot.robotId,
    data: robot.cities,
  }));

  const chartData = {
    labels: robotsData.map((robot) => robot.label),
    datasets: [
      {
        label: 'Number of Cities Covered by FrodoBots',
        data: robotsData.map((robot) => robot.data),
        backgroundColor: [
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.green[400],
          tailwindConfig().theme.colors.red[400],
          tailwindConfig().theme.colors.yellow[400],
          tailwindConfig().theme.colors.indigo[400],  
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.green[400],
          tailwindConfig().theme.colors.red[400],
          tailwindConfig().theme.colors.yellow[400],
          tailwindConfig().theme.colors.indigo[400],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Cities Covered by Robots</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard03;
