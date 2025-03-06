import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../../components/starring/starrating';
import api from '../../services/api';
import { useAuth } from '../../context/authcontext';
import { toast } from 'react-hot-toast';

const ListingDetail = () => {
  const { id } = useParams();
  const { user, isHotelLister } = useAuth(); // Get user from AuthContext
  const [currentlisting, setCurrentListing] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const [reviewForm, setReviewForm] = useState({
    rating: 1,
    comment: ''
  });

  useEffect(() => {
    const fetchListingData = async () => {
      try {
        setIsLoading(true);
        const response = await api.get(`/listings/${id}`);
        setCurrentListing(response.data.data);
        setIsLoading(false);
      } catch (e) {
        console.error("Error while fetching details", e);
        setError("Failed to load listing details");
        setIsLoading(false);
      }
    };

    fetchListingData();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    console.log("hello ");
    console.log(`/listings/${id}/reviews`)
    e.preventDefault();
    
    if (!user) {
        toast.error("Please login to add a review");
        return;
    }

    if (!reviewForm.comment.trim()) {
        toast.error("Please add a comment");
        return;
    }

    setIsSubmitting(true);

    try {
      const response = await api.post(
        `/listing/${id}/reviews`,  // Updated path to match backend
        reviewForm
    );
        if (response.data.success) {
            // Update the current listing with the new review
            setCurrentListing(prev => ({
                ...prev,
                reviews: [...prev.reviews, response.data.data]
            }));

            // Reset form
            setReviewForm({
                rating: 1,
                comment: ''
            });

            toast.success("Review added successfully!");
        }
    } catch (error) {
        console.error("Error submitting review:", error);
        toast.error(error.response?.data?.message || "Failed to submit review");
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await api.delete(`/listing/${id}/reviews/${reviewId}`);
      
      // Update the reviews list by filtering out the deleted review
      setCurrentListing(prev => ({
        ...prev,
        reviews: prev.reviews.filter(review => review._id !== reviewId)
      }));

      toast.success("Review deleted successfully!");
    } catch (error) {
      console.error("Error deleting review:", error);
      toast.error("Failed to delete review");
    }
  };

  if (isLoading) {
    return <div className="container mx-auto px-4">Loading...</div>;
  }

  if (error) {
    return <div className="container mx-auto px-4 text-red-500">{error}</div>;
  }

  if (!currentlisting) {
    return <div className="container mx-auto px-4">No listing found</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <div className="row mt-3">
        <div className="col-8 offset-3">
          <h1 className="text-3xl font-bold">{currentlisting.title || 'Untitled Listing'}</h1>
        </div>

        <div className="cards col-6 offset-3 show-card listing-cards">
          {currentlisting.image && currentlisting.image.url && (
            <img 
              src={currentlisting.image.url}
              className="card-img-top show-img h-[30vh] w-full object-cover rounded-t-lg" 
              alt={currentlisting.title || 'Listing Image'}
            />
          )}
          <div className="card-body p-4">
            {currentlisting.owner && (
              <p className="card-text italic">
                Owned by {currentlisting.owner.fullname || 'Unknown'}
              </p>
            )}
            <p className="card-text mt-2">{currentlisting.description || 'No description'}</p>
            <p className="card-text mt-2">
              ₹{currentlisting.price 
                ? currentlisting.price.toLocaleString("en-IN") 
                : 'Price not available'}
            </p>
            <p className="card-text">{currentlisting.location || 'Location not specified'}</p>
            <p className="card-text">{currentlisting.country || 'Country not specified'}</p>
          </div>
        </div>
      </div>

      {/* Show edit/delete buttons only if user is the owner */}
      {user && currentlisting.owner && 
       user._id === currentlisting.owner._id && (
        <div className="btns flex gap-4 mt-4">
          <a 
            href={`/listings/${currentlisting._id}/edit`}
            className="btn bg-dark text-white px-4 py-2 rounded"
          >
            EDIT
          </a>
          <form method="post" action={`/listings/${currentlisting._id}?_method=DELETE`}>
            <button className="btn bg-dark text-white px-4 py-2 rounded">
              DELETE
            </button>
          </form>
        </div>
      )}

      <hr className="my-6" />

      {/* Show review form only if user is logged in */}
      {user && (
        <div className="col-8 offset-3 mb-3">
          <h4 className="text-xl font-bold mb-4">Leave a review</h4>
          <form 
            onSubmit={handleReviewSubmit}
            className="needs-validation"
            noValidate
          >
            <div className="mt-3 mb-3">
              <label className="block mb-2">Rating</label>
              <StarRating 
                value={reviewForm.rating}
                onChange={(rating) => setReviewForm(prev => ({...prev, rating}))}
              />
            </div>

            <div className="mt-3 mb-3">
              <label className="block mb-2">COMMENT</label>
              <textarea
                value={reviewForm.comment}
                onChange={(e) => setReviewForm(prev => ({
                  ...prev, 
                  comment: e.target.value
                }))}
                className="w-full p-2 border rounded"
                rows="5"
                required
              />
              <div className="invalid-feedback">
                Please add some comment
              </div>
            </div>

            <button 
              className="bg-red-600 text-white border rounded-md px-4 py-2 "
              disabled={isSubmitting}
              
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      )}

      {/* Reviews Section */}
      {currentlisting.reviews && currentlisting.reviews.length > 0 ? (
        <>
          <h3 className="text-2xl font-bold mt-6 mb-4">REVIEWS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentlisting.reviews.map((review) => (
              <div 
                key={review._id} 
                className="card review-card p-4 border rounded"
              >
                <div className="card-body">
                  <h5 className="card-title font-bold">
                    {review.author?.username || 'Anonymous'}
                  </h5>
                  <div className="my-2">
                    <StarRating value={review.rating} readonly />
                  </div>
                  <p className="card-text">{review.comment}</p>
                </div>
                
                {/* Show delete button only if user is the review author */}
               
                
                {user && review.author && 
                 user._id === review.author._id && (
                  <button 
                    onClick={() => handleDeleteReview(review._id)}
                    className="bg-red-600 border rounded-md text-white px-3 py-1 text-sm mt-3"
                  >
                    DELETE
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 mt-6">No reviews yet</p>
      )}
    </div>
  );
};

export default ListingDetail;