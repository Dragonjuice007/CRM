export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  status: 'open' | 'closed';
  assignedTo?: string;
  createdAt: Date;
}

export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  experience: number;
  noticePeriod: string;
  visaStatus: string;
  salary: string;
  availability: string;
  skills: string[];
  matchPercentage: number;
  status: 'new' | 'submitted' | 'approved' | 'rejected';
  feedback?: string;
}

export interface Recruiter {
  id: string;
  name: string;
  email: string;
  metrics: {
    totalSubmissions: number;
    acceptanceRate: number;
    activeJobs: number;
    weeklySubmissions: number;
  };
}