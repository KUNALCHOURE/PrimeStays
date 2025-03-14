import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../../components/starring/starrating';
import api from '../../services/api';
import { useAuth } from '../../context/authcontext';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ListingDetail = () => {
  const { id } = useParams();
  const { user } = useAuth(); 
  const [currentlisting, setCurrentListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isdeleting, setdelete] = useState(false);
  const [reviewForm, setReviewForm] = useState({ rating: 1, comment: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/listings/${id}`);
        console.log(response.data.data);
        setCurrentListing(response.data.data);
      } catch (e) {
        setError("Failed to load listing details");
      } finally {
        setIsLoading(false);
      }
    };
    fetchListingData();
  }, [id]);

  const handledeletelisting = async () => {
    try {
      console.log(id);
      setdelete(true);
      console.log("deleting");
      let response = await api.delete(`/listings/${id}`);
      
      if (!response) {
        throw new Error("Problem while deleting the listings");
      }
      toast("Listing deleted successfully");
      setdelete(false);
      navigate('/listings');
    } catch (error) {
      toast.error(error.response?.data?.message || "Problem occurred while deleting the listing");
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("Please login to add a review");
    if (!reviewForm.comment.trim()) return toast.error("Please add a comment");

    setIsSubmitting(true);
    try {
      const response = await api.post(`/listing/${id}/reviews`, reviewForm);
      if (response.data.success) {
        setCurrentListing(prev => ({ ...prev, reviews: [...prev.reviews, response.data.data] }));
        setReviewForm({ rating: 1, comment: '' });
        toast.success("Review added successfully!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to submit review");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div className="flex justify-center items-center min-h-[50vh]"><div className="animate-spin h-12 w-12 border-4 border-t-red-600 border-gray-300 rounded-full"></div></div>;
  if (error) return <div className="text-center text-red-600 text-lg font-semibold mt-10">{error}</div>;

  return (
    <div className="container mx-auto px-6 py-12 mt-20">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden rounded-lg shadow-lg">
        <img src={currentlisting.image?.url} alt={currentlisting.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6 text-white">
          <h1 className="text-3xl font-bold">{currentlisting.title}</h1>
          <p className="text-lg">₹{currentlisting.price?.toLocaleString("en-IN")}/night - {currentlisting.location}, {currentlisting.country}</p>
        </div>
      </div>
      
      {/* Details */}
      <div className="bg-white p-6 shadow-lg rounded-lg mt-6">
        <p className="text-gray-700">{currentlisting.description}</p>
        <p className="text-lg font-semibold mt-4">Owned by {currentlisting.owner?.fullname || 'Unknown'}</p>
      </div>

      {/* Contact Information */}
      <div className="bg-white p-6 shadow-lg rounded-lg mt-6">
        <h4 className="text-xl font-bold">Contact Information</h4>
        <ul className="mt-2">
          <li><strong>Phone:</strong> {currentlisting.ownerInfo?.phone || 'N/A'}</li>
          <li><strong>Email:</strong> {currentlisting.ownerInfo?.email || 'N/A'}</li>
          <li><strong>Website:</strong> <a href={currentlisting.ownerInfo?.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{currentlisting.ownerInfo?.website || 'N/A'}</a></li>
        </ul>
      </div>
      
      {/* Review Form */}
      {user && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8">
          <h4 className="text-xl font-bold">Leave a review</h4>
          <form onSubmit={handleReviewSubmit}>
            <StarRating value={reviewForm.rating} onChange={(rating) => setReviewForm(prev => ({...prev, rating}))} />
            <textarea value={reviewForm.comment} onChange={(e) => setReviewForm(prev => ({ ...prev, comment: e.target.value }))} className="w-full p-3 border rounded mt-4" rows="4" required placeholder="Write a review..."></textarea>
            <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 transition-all" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Review'}</button>
          </form>
        </div>
      )}
      
      {/* Reviews */}
      {currentlisting.reviews?.length > 0 ? (
        <div className="mt-10">
          <h3 className="text-2xl font-bold">Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {currentlisting.reviews.map((review) => (
              <div key={review._id} className="bg-white p-4 rounded-lg shadow-md">
                <h5 className="font-bold">{review.author?.username || 'Anonymous'}</h5>
                <StarRating value={review.rating} readonly />
                <p className="text-gray-600 mt-2">{review.comment}</p>
                {user && review.author && user._id === review.author._id && (
                  <button className="text-red-600 text-sm mt-2 hover:underline" onClick={() => handleDeleteReview(review._id)}>Delete</button>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : <p className="text-center text-gray-500 mt-6">No reviews yet</p>}

      {user && currentlisting.owner.username === user.username && (
        <div className='button mt-10'>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700 transition-all"
            onClick={handledeletelisting}
          >
            {isdeleting ? "Deleting" : "Delete"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ListingDetail;