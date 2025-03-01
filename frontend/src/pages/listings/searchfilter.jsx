// src/components/Listings/SearchFilterBar.jsx
import React from 'react';

const SearchFilterBar = ({ searchQuery, onSearchChange, filters, onFilterChange, filterData }) => {
    return (
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search listings..."
          className="border rounded px-4 py-2"
        />
  
        <select
          value={filters.city}
          onChange={(e) => onFilterChange('city', e.target.value)}
          className="border rounded px-4 py-2"
        >
          <option value="">All Cities</option>
          {filterData.cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
  
        <select
          value={filters.state}
          onChange={(e) => onFilterChange('state', e.target.value)}
          className="border rounded px-4 py-2"
        >
          <option value="">All States</option>
          {filterData.states.map((state) => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
  
        <select
          value={filters.price}
          onChange={(e) => onFilterChange('price', e.target.value)}
          className="border rounded px-4 py-2"
        >
          <option value="">All Prices</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
    );
  };

export default SearchFilterBar;