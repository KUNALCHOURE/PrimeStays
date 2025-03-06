import { FaSearch } from "react-icons/fa";

const SearchFilterBar = ({ searchQuery, onSearchChange, filters, onFilterChange, filterData }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-wrap items-center justify-between gap-4 ">
      {/* Search Input */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search listings..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-5 py-3 text-lg border border-gray-300 rounded-lg focus:border-red-500 focus:ring-red-500 shadow-sm pl-10"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      
      {/* Filters */}
      <select
        value={filters.city}
        onChange={(e) => onFilterChange('city', e.target.value)}
        className="px-4 py-3 text-lg border border-gray-300 rounded-lg focus:border-red-500 focus:ring-red-500 shadow-sm"
      >
        <option value="">All Cities</option>
        {filterData.cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
      
      <select
        value={filters.state}
        onChange={(e) => onFilterChange('state', e.target.value)}
        className="px-4 py-3 text-lg border border-gray-300 rounded-lg focus:border-red-500 focus:ring-red-500 shadow-sm"
      >
        <option value="">All States</option>
        {filterData.states.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </select>
      
      <select
        value={filters.price}
        onChange={(e) => onFilterChange('price', e.target.value)}
        className="px-4 py-3 text-lg border border-gray-300 rounded-lg focus:border-red-500 focus:ring-red-500 shadow-sm"
      >
        <option value="">All Prices</option>
        <option value="low">Lowest First</option>
        <option value="high">Highest First</option>
      </select>
      
     
    </div>
  );
};

export default SearchFilterBar;