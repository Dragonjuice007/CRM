import React from 'react';
import { Briefcase, Users, PieChart, Calendar, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'jobs', icon: Briefcase, label: 'Jobs' },
    { id: 'candidates', icon: Users, label: 'Candidates' },
    { id: 'metrics', icon: PieChart, label: 'Metrics' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
  ];

  return (
    <div className="w-64 bg-white border-r">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-center h-16 px-4 border-b">
          <h2 className="text-xl font-bold text-indigo-600">RecruiterCRM</h2>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center px-4 py-2.5 text-sm rounded-lg transition-colors duration-150 ${
                activeTab === id
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t">
          <button className="flex items-center w-full px-4 py-2.5 text-sm text-gray-600 rounded-lg hover:bg-gray-50">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}