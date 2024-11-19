import React, { useState } from 'react';
import { Clock, Users, Building, MapPin, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

export default function JobBoard() {
  const [jobs] = useState([
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      status: 'open',
      candidates: 12,
      deadline: '2024-03-30',
      description: 'Looking for an experienced React developer...',
    },
    {
      id: '2',
      title: 'Full Stack Engineer',
      company: 'Innovation Labs',
      location: 'New York, NY',
      status: 'open',
      candidates: 8,
      deadline: '2024-04-15',
      description: 'Seeking a talented Full Stack developer...',
    },
  ]);

  const handleSelfAssign = (jobId: string) => {
    toast.success('Job successfully assigned to you!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Active Job Postings</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and track all job positions</p>
        </div>
        <button className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-150">
          <Plus className="w-5 h-5 mr-2" />
          New Job Post
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-150">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Building className="w-4 h-4 mr-1" />
                    {job.company}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.location}
                  </div>
                </div>
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  {job.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {job.candidates} candidates
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {new Date(job.deadline).toLocaleDateString()}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{job.description}</p>

              <div className="flex space-x-2">
                <button 
                  className="flex-1 px-3 py-2 text-sm font-medium rounded-md bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                  onClick={() => toast.success('Opening job details...')}
                >
                  View Details
                </button>
                <button 
                  className="flex-1 px-3 py-2 text-sm font-medium rounded-md bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors duration-150"
                  onClick={() => handleSelfAssign(job.id)}
                >
                  Self Assign
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}