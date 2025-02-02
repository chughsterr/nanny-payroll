'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Nanny Payroll System
        </h1>
        
        <div className="grid gap-6">
          {/* Quick Actions Section */}
          <section className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
            <div className="flex gap-4">
              <button 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={() => router.push('/nanny/add')}
              >
                Add Nanny
              </button>
              <button 
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                onClick={() => router.push('/timesheet')}
              >
                Record Time
              </button>
            </div>
          </section>

          {/* Overview Section */}
          <section className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-medium text-gray-700">Next Pay Period</h3>
                <p className="text-2xl font-bold text-gray-900">March 1 - 15, 2024</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-medium text-gray-700">Hours This Period</h3>
                <p className="text-2xl font-bold text-gray-900">0 hours</p>
              </div>
            </div>
          </section>

          {/* Recent Activity Section */}
          <section className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                No recent activity to display.
              </p>
            </div>
          </section>

          {/* Tax Information Section */}
          <section className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tax Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-medium text-gray-700">Next Tax Payment Due</h3>
                <p className="text-xl font-bold text-gray-900">April 15, 2024</p>
                <p className="text-sm text-gray-600">Federal Q1 Estimated</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-medium text-gray-700">YTD Wages Paid</h3>
                <p className="text-xl font-bold text-gray-900">$0.00</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h3 className="font-medium text-gray-700">YTD Tax Liability</h3>
                <p className="text-xl font-bold text-gray-900">$0.00</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}