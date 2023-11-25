
import React from 'react';
import mockData from '../../data/mockData.json';

function DashboardCard04() {
  // Extracting descriptions from mock data
  const descriptions = mockData.description;

  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Overview</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Robot</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Distances Covered</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Number of Users</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Cities Covered</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Bugs Fixed</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {/* Rows */}
              {Object.keys(descriptions).map(robotId => (
                <tr key={robotId}>
                  <td className="p-2">
                    <div className="flex items-center">
                      <div className="text-slate-800 dark:text-slate-100">{robotId}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{descriptions[robotId].distancesCovered} </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-emerald-500">{descriptions[robotId].numberOfUsers}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{descriptions[robotId].citiesCovered}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center text-red-500">{descriptions[robotId].bugsFixed}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard04;
