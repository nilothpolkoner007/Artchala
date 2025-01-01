import React from 'react';
import { Bell, MessageSquare } from 'lucide-react';

export function UserActions() {
  return (
    <div className="flex items-center space-x-4">
      <button className="p-2 text-gray-400 hover:text-gray-500 hover:scale-105 transition-all">
        <Bell className="h-6 w-6" />
      </button>
      <button className="p-2 text-gray-400 hover:text-gray-500 hover:scale-105 transition-all">
        <MessageSquare className="h-6 w-6" />
      </button>
      <button className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="h-8 w-8 rounded-full"
        />
      </button>
    </div>
  );
}