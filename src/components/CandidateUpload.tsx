import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import CandidateTable from './CandidateTable';
import type { Candidate } from '../types';

export default function CandidateUpload() {
  const [uploads, setUploads] = useState([
    { id: 1, name: 'John_Doe_Resume.pdf', status: 'complete', time: '2 minutes ago' },
    { id: 2, name: 'Jane_Smith_CV.pdf', status: 'processing', time: 'Just now' },
  ]);

  const [candidates] = useState<Candidate[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234-567-8900',
      location: 'New York, NY',
      experience: 5,
      noticePeriod: '30 days',
      visaStatus: 'H1B',
      salary: '$120,000',
      availability: 'Immediate',
      skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
      matchPercentage: 85,
      status: 'new'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234-567-8901',
      location: 'San Francisco, CA',
      experience: 7,
      noticePeriod: '60 days',
      visaStatus: 'Citizen',
      salary: '$150,000',
      availability: '2 weeks',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      matchPercentage: 92,
      status: 'approved'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@example.com',
      phone: '+1 234-567-8902',
      location: 'Austin, TX',
      experience: 4,
      noticePeriod: '15 days',
      visaStatus: 'GC',
      salary: '$110,000',
      availability: '2 weeks',
      skills: ['Vue.js', 'JavaScript', 'MongoDB', 'Express'],
      matchPercentage: 78,
      status: 'submitted'
    }
  ]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach(file => {
      toast.success(`Processing ${file.name}`);
      // Simulate file processing
      setTimeout(() => {
        setUploads(prev => [...prev, {
          id: Date.now(),
          name: file.name,
          status: 'complete',
          time: 'Just now'
        }]);
      }, 1500);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    }
  });

  const handleDelete = (id: string) => {
    toast.success('Candidate removed successfully');
  };

  const handleEdit = (id: string) => {
    toast.success('Opening candidate details...');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Candidate Management</h2>
          <p className="text-sm text-gray-500 mt-1">Upload and process candidate resumes</p>
        </div>
      </div>

      <div {...getRootProps()} className={`
        border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors duration-150
        ${isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}
      `}>
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop resumes here, or click to select files
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Supports PDF, DOC, DOCX files
        </p>
      </div>

      {uploads.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="px-6 py-5">
            <h3 className="text-lg font-medium text-gray-900">Recent Uploads</h3>
            <div className="mt-4 space-y-3">
              {uploads.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{file.name}</p>
                      <p className="text-xs text-gray-500">{file.time}</p>
                    </div>
                  </div>
                  {file.status === 'complete' ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <div className="animate-pulse">
                      <div className="h-5 w-5 bg-indigo-200 rounded-full" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="px-6 py-5">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Candidate Database</h3>
          <CandidateTable 
            candidates={candidates}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
}