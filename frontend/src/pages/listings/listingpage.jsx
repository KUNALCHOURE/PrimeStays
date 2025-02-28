// src/pages/Listings/ListingsPage.jsx
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListingCard from './listingcard';
import FilterBar from './filterbar';
import api from '../../services/api';
const ListingsPage = () => {
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);
    const [showTax, setShowTax] = useState(false);
  
    useEffect(() => {
      fetchListings();
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
  
    const filteredListings = activeFilter
      ? listings.filter(listing => {
          // Add your filter logic here based on your data structure
          return listing.category === activeFilter;
        })
      : listings;
  
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
        {/* Filters */}
        <FilterBar 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter}
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