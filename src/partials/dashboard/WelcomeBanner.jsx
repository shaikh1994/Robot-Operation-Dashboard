import React from 'react';

function WelcomeBanner() {
  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Background illustration */}
      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 bg-opacity-50 rounded-sm"></div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Good afternoon, FrodoBot. 👋</h1>
        <p className="dark:text-indigo-200">Admin Dashboard:</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
