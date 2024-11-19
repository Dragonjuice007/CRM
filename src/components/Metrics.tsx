import React from 'react';
import { TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Metrics() {
  const stats = [
    {
      name: 'Total Submissions',
      value: '156',
      change: '+12%',
      icon: TrendingUp,
      trend: 'up',
    },
    {
      name: 'Active Candidates',
      value: '43',
      change: '+18%',
      icon: Users,
      trend: 'up',
    },
    {
      name: 'Success Rate',
      value: '68%',
      change: '+7%',
      icon: CheckCircle,
      trend: 'up',
    },
    {
      name: 'Avg Response Time',
      value: '2.4h',
      change: '-15%',
      icon: Clock,
      trend: 'down',
    },
  ];

  const chartData = [
    { name: 'Mon', submissions: 4 },
    { name: 'Tue', submissions: 6 },
    { name: 'Wed', submissions: 8 },
    { name: 'Thu', submissions: 7 },
    { name: 'Fri', submissions: 9 },
    { name: 'Sat', submissions: 5 },
    { name: 'Sun', submissions: 4 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className={`h-6 w-6 ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className={`ml-2 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Weekly Submissions</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="submissions" stroke="#4F46E5" fill="#EEF2FF" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Success Rate by Job Type</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="submissions" stroke="#4F46E5" fill="#EEF2FF" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}