// src/pages/Listings/ListingsPage.jsx
import { useState, useEffect } from 'react';
import ListingCard from './listingcard';
import SearchFilterBar from './searchfilter.jsx'; // Import the new component
import api from '../../services/api';

const ListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ city: '', state: '', price: '' });
  const [showTax, setShowTax] = useState(false);
  const [filterData, setFilterData] = useState({ cities: [], states: [] });
  useEffect(() => {
    fetchListings();
    fetchFilterData();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await api.get('/listings');
      
      if (!response.data || response.status !== 200) {
        throw new Error('Failed to fetch listings');
      }
      setListings(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  const fetchFilterData = async () => {
    try {
        console.log("doing things");
        const response = await fetch("http://localhost:3030/api/listings/filters", {
            method: "GET",
            credentials: "include"  // If using authentication
        });
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        console.log("Fetched data:", data);
        setFilterData(data);
    } catch (err) {
        console.error("Fetch failed:", err);
    }
};


  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const filteredListings = listings
  .filter((listing) => {
    const title = listing.title || ''; // Default to an empty string if title is undefined
    const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCity = filters.city ? listing.location === filters.city : true;
    const matchesState = filters.state ? listing.country === filters.state : true;
    // Implement price filtering logic based on your data structure
    return matchesSearch && matchesCity && matchesState;
})
    .sort((a, b) => {
      if (filters.price === 'low') {
        return a.price - b.price;
      } else if (filters.price === 'high') {
        return b.price - a.price;
      }
      return 0;
  });

  if (loading) return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  if (error) return (
    <div className="text-center text-red-600 py-8">
      Error: {error}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filter Bar */}
      <SearchFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filters={filters}
        onFilterChange={handleFilterChange}
        filterData={filterData}
      />

      {/* Tax Toggle */}
      <div className="flex justify-end mb-6">
        <div className="border border-gray-300 rounded-full px-4 py-2">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={showTax}
              onChange={() => setShowTax(!showTax)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              Display Total After Taxes
            </span>
          </label>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map((listing) => (
          <ListingCard 
            key={listing._id} 
            listing={listing} 
            showTax={showTax}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;