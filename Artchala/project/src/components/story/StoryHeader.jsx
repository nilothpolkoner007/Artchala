import React from 'react';

export function StoryHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Discover Stories</h1>
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md 
                       hover:bg-indigo-700 transition-colors">
          Share Story
        </button>
      </div>
    </div>
  );
}