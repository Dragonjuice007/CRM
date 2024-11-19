import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import Sidebar from './Sidebar';
import JobBoard from './JobBoard';
import Metrics from './Metrics';
import CandidateUpload from './CandidateUpload';
import Notifications from './Notifications';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <div className="flex h-screen bg-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 overflow-hidden">
        <header className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
              </h1>
              <div className="flex items-center space-x-4">
                <Notifications />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {activeTab === 'jobs' && <JobBoard />}
            {activeTab === 'metrics' && <Metrics />}
            {activeTab === 'candidates' && <CandidateUpload />}
          </div>
        </main>
      </div>
    </div>
  );
}