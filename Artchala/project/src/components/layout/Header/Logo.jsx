import React from 'react';
import { Palette } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center">
      <Palette className="h-8 w-8 text-indigo-600" />
      <span className="ml-2 text-xl font-bold text-gray-900">Artchala</span>
    </div>
  );
}