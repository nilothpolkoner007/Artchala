import React from 'react';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { UserActions } from './UserActions';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="flex-1 max-w-lg mx-8">
            <SearchBar />
          </div>
          <UserActions />
        </div>
      </div>
    </header>
  );
}