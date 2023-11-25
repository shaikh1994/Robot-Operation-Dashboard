import React from 'react';
import BarChart from '../../charts/BarChart03';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

import mockData from '../../data/mockData.json';

function DashboardCard06() {

  const statusData = mockData.status;
  const statusLabels = Object.keys(statusData);
  const severityColors = {
    Critical: {
      backgroundColor: tailwindConfig().theme.colors.red[500],
      hoverBackgroundColor: tailwindConfig().theme.colors.red[600],
    },
    Severe: {
      backgroundColor: tailwindConfig().theme.colors.orange[500],
      hoverBackgroundColor: tailwindConfig().theme.colors.orange[600],
    },
    Normal: {
      backgroundColor: tailwindConfig().theme.colors.green[500],
      hoverBackgroundColor: tailwindConfig().theme.colors.green[600],
    },
    Moderate: {
      backgroundColor: tailwindConfig().theme.colors.blue[500],
      hoverBackgroundColor: tailwindConfig().theme.colors.blue[600],
    },
    Stable: {
      backgroundColor: tailwindConfig().theme.colors.indigo[500],
      hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
    },
  };
  
  const datasets = statusLabels.map((label) => {
    const { label: statusLabel, value: statusValue } = statusData[label];
    const { backgroundColor, hoverBackgroundColor } = severityColors[statusLabel] || {
      backgroundColor: tailwindConfig().theme.colors.gray[500],
      hoverBackgroundColor: tailwindConfig().theme.colors.gray[600],
    };
  
    return {
      label: statusLabel,
      data: [statusValue],
      backgroundColor: backgroundColor,
      hoverBackgroundColor: hoverBackgroundColor,
      barPercentage: 1,
      categoryPercentage: 1,
    };
  });
  

  const updatedChartData = {
    labels: ['Reasons'],
    datasets: datasets,
  };

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Reason for Refunds</h2>
      </header>

      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={updatedChartData} width={595} height={48} />
      </div>
    </div>
  );
}

export default DashboardCard06;
