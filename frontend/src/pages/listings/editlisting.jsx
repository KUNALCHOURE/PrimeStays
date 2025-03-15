import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import api from '../../services/api';

const EditListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [originalImageUrl, setOriginalImageUrl] = useState('');

  useEffect(() => {
    fetchListing();
  }, [id]);

  const fetchListing = async () => {
    try {
      const response = await api.get(`/listings/${id}`);
      setOriginalImageUrl(response.data.image.url); // ✅ Set image URL from response
    } catch (error) {
      toast.error('Error loading listing');
    } finally {
      setLoading(false); // ✅ Stop loading after fetching data
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);

    try {
      await api.put(`/listings/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success('Listing updated successfully!');
      navigate(`/listings/${id}`);
    } catch (error) {
      toast.error('Error updating listing');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">EDIT LISTING</h1>

      <div className="max-w-2xl mx-auto">
        <form 
          onSubmit={handleSubmit}
          className="space-y-6"
          encType="multipart/form-data"
          noValidate
        >
          {/* Form Fields */}

          {/* Original Image Display */}
          {originalImageUrl && (
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Current Image</h2>
              <img 
                src={originalImageUrl}
                alt="Current listing"
                className="w-[300px] h-[200px] object-cover rounded-lg"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-dark text-white py-2 px-4 rounded-md hover:bg-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark transition-colors disabled:opacity-50"
          >
            {submitting ? 'Saving...' : 'SAVE CHANGES'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditListing;
