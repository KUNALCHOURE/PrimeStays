import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../context/authcontext'; // Adjust the import path as needed

const NewListing = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // Get the current user from auth context
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    country: '',
    image: null, // Add image to form values
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    // Handle file input separately
    if (name === 'image') {
      setFormValues({ 
        ...formValues, 
        image: files ? files[0] : null 
      });
      return;
    }

    setFormValues({ ...formValues, [name]: value });

    // Simple validation logic
    if (value.trim() === '') {
      setFormErrors({ ...formErrors, [name]: 'This field is required' });
    } else {
      const newErrors = { ...formErrors };
      delete newErrors[name];
      setFormErrors(newErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    
    // Check all required fields
    Object.keys(formValues).forEach(key => {
      if (key !== 'image' && (!formValues[key] || formValues[key].toString().trim() === '')) {
        errors[key] = 'This field is required';
      }
    });

    // Check if image is selected
    if (!formValues.image) {
      errors.image = 'Please upload an image';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    // Validate form before submission
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    // Create FormData for file upload
    const formData = new FormData();
    
    // Append all form values to FormData
    Object.keys(formValues).forEach(key => {
      if (key !== 'image') {
        formData.append(key, formValues[key]);
      }
    });

    // Append image file
    if (formValues.image) {
      formData.append('image', formValues.image);
    }

    try {
      const response = await fetch('http://localhost:3030/api/listings', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${user.token}`, // Include JWT token
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create listing');
      }

      toast.success('Listing created successfully!');
      navigate('/listings');
    } catch (error) {
      toast.error(error.message || 'Error creating listing');
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
          {/* Title Input */}
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
              value={formValues.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter Title"
              required
            />
            {formErrors.title && (
              <div className="invalid-feedback text-red-600 text-sm mt-1">
                {formErrors.title}
              </div>
            )}
          </div>

          {/* Description Input */}
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
              value={formValues.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter Description"
              required
            />
            {formErrors.description && (
              <div className="invalid-feedback text-red-600 text-sm mt-1">
                {formErrors.description}
              </div>
            )}
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
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
            {formErrors.image && (
              <div className="invalid-feedback text-red-600 text-sm mt-1">
                {formErrors.image}
              </div>
            )}
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
                value={formValues.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Enter Price"
                required
              />
              {formErrors.price && (
                <div className="invalid-feedback text-red-600 text-sm mt-1">
                  {formErrors.price}
                </div>
              )}
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
                value={formValues.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder="Enter Location"
                required
              />
              {formErrors.location && (
                <div className="invalid-feedback text-red-600 text-sm mt-1">
                  {formErrors.location}
                </div>
              )}
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
              value={formValues.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="Enter Country"
              required
            />
            {formErrors.country && (
              <div className="invalid-feedback text-red-600 text-sm mt-1">
                {formErrors.country}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className='flex justify-center'>
            <button
              type="submit"
              disabled={loading}
              className="w-30 text-center text-white font-bold py-2 px-4 border rounded-md bg-green-500"
            >
              {loading ? 'Creating...' : 'CREATE'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewListing;