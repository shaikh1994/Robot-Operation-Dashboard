import React from 'react';

function DashboardCard07() {

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Frodobot Location</h2>
      </header>
      
        <iframe
          title="Robot Locations"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d49211.576445523686!2d103.79121639831575!3d1.3444645983769734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smy!4v1700775421316!5m2!1sen!2smy"
          width="100%"
          height="400"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      
    </div>
  );
}

export default DashboardCard07;
