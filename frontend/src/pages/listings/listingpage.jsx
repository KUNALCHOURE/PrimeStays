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

  }, []);

  const fetchListings = async () => {
    try {
      const response = await api.get('/listings');
       console.log(response.data);
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
  

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const filteredListings = listings
    .filter((listing) => {
      const title = listing.title || ''; // Default to an empty string if title is undefined
      const matchesSearch = title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCity = filters.city ? listing.location === filters.city : true;
      const matchesState = filters.state ? listing.country === filters.state : true;
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
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
    </div>
  );

  if (error) return (
    <div className="text-center text-red-600 py-8 text-lg font-semibold">
      Error: {error}
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-12 mt-20">
      {/* Search and Filter Bar */}
      <div className="  mb-16">
        <SearchFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filters={filters}
          onFilterChange={handleFilterChange}
          filterData={filterData}
        />
      </div>
      
      {/* Tax Toggle */}
      <div className="flex justify-end mb-6">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showTax}
            onChange={() => setShowTax(!showTax)}
            className="sr-only peer"
          />
          <div className="w-12 h-7 bg-gray-300 rounded-full peer peer-checked:bg-red-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-5"></div>
          <span className="ml-3 text-sm font-medium text-gray-900">
            Display Total After Taxes
          </span>
        </label>
      </div>
      
      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
