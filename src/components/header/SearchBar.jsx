import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const SearchBar = () => {
    return (
        <div className="flex items-center">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <SearchIcon className="w-6 h-6 text-[#AFDAB791]" />
                </div>
                <input
                    type="search"
                    id="search"
                    className="block p-2 pl-10 w-[350px] h-[40px] text-gray-900 bg-input border-inputBorder rounded-inputRadius focus:border-inputBorder focus:box-shadow-transparent focus:ring-0"
                    placeholder="Search"
                />
            </div>
        </div>
    );
};

export default SearchBar;
