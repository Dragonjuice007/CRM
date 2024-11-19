import React, { useState } from 'react';
import { Bell } from 'lucide-react';

export default function Notifications() {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'New Job Posted',
      message: 'Senior React Developer position is now available',
      time: '5m ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Candidate Interview',
      message: 'John Doe\'s interview scheduled for tomorrow',
      time: '1h ago',
      unread: false,
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
      >
        <Bell className="h-6 w-6" />
        {notifications.some(n => n.unread) && (
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1 z-50">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 ${
                notification.unread ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
              }`}
            >
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {notification.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {notification.message}
              </p>
              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}