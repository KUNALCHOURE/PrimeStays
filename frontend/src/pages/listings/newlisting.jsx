// src/pages/Listings/NewListing.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const NewListing = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('/listings', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to create listing');
      }

      toast.success('Listing created successfully!');
      navigate('/listings');
    } catch (error) {
      toast.error('Error creating listing');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">ADD A NEW PLACE</h1>

      <div className="max-w-2xl mx-auto">
        <form 
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
          noValidate
        >
          {/* Title */}
          <div>
            <label 
              htmlFor="title" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              TITLE
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter Title"
              required
            />
            <div className="valid-feedback text-green-600 text-sm mt-1">
              Title looks good
            </div>
          </div>

          {/* Description */}
          <div>
            <label 
              htmlFor="description" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter Description"
              required
            />
            <div className="valid-feedback text-green-600 text-sm mt-1">
              Description looks good
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label 
              htmlFor="image" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>

          {/* Price and Location Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4">
              <label 
                htmlFor="price" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Enter Price"
                required
              />
              <div className="invalid-feedback text-red-600 text-sm mt-1">
                Please enter a valid price
              </div>
            </div>

            <div className="md:col-span-8">
              <label 
                htmlFor="location" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Enter Location"
                required
              />
              <div className="invalid-feedback text-red-600 text-sm mt-1">
                Please enter location
              </div>
            </div>
          </div>

          {/* Country */}
          <div>
            <label 
              htmlFor="country" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter Country"
              required
            />
            <div className="invalid-feedback text-red-600 text-sm mt-1">
              Please enter country
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-dark text-white py-2 px-4 rounded-md hover:bg-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'CREATE'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewListing;