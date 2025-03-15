import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../context/authcontext'; // Adjust the import path as needed
import axios from 'axios';

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
    image: null,
    phone: '',
    email: '',
    website: '',
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
    const formData = new FormData();
  formData.append("title", formValues.title);
  formData.append("description", formValues.description);
  formData.append("price", formValues.price);
  formData.append("location", formValues.location);
  formData.append("country", formValues.country);
  formData.append("phone", formValues.phone);
  formData.append("email", formValues.email);
  formData.append("website", formValues.website);
    if (formValues.image) {
        formData.append("image", formValues.image);
    }

    // ✅ Debug: Log FormData content
    for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]); // ✅ Should show "image" => File object
    }
  
    try {
      setLoading(true);
      const response = await api.post("/listings", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    
  
        console.log("Response:", response.data);
        setLoading(false);
        toast.success("Listing created successfully!");
        navigate("/listings");
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        toast.error(error.response?.data?.error || "Error creating listing");
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
{/* Phone Number Input */}
<div>
  <label 
    htmlFor="phone" 
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    Phone Number
  </label>
  <input
    type="text"
    id="phone"
    name="phone"
    value={formValues.phone}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
    placeholder="Enter Phone Number"
    required
  />
  {formErrors.phone && (
    <div className="invalid-feedback text-red-600 text-sm mt-1">
      {formErrors.phone}
    </div>
  )}
</div>

{/* Email Address Input */}
<div>
  <label 
    htmlFor="email" 
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    Email Address
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={formValues.email}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
    placeholder="Enter Email Address"
    required
  />
  {formErrors.email && (
    <div className="invalid-feedback text-red-600 text-sm mt-1">
      {formErrors.email}
    </div>
  )}
</div>

{/* Website Input (optional) */}
<div>
  <label 
    htmlFor="website" 
    className="block text-sm font-medium text-gray-700 mb-1"
  >
    Website (optional)
  </label>
  <input
    type="text"
    id="website"
    name="website"
    value={formValues.website}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
    placeholder="Enter Website (if applicable)"
  />
  {formErrors.website && (
    <div className="invalid-feedback text-red-600 text-sm mt-1">
      {formErrors.website}
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