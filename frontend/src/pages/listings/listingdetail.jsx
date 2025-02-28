// src/pages/Listings/ListingDetail.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../../components/starring/starrating';
import StarabilityResult from '../../components/starring/starabilityresult';

const ListingDetail = () => {
  const { id } = useParams();
  const [currentuser] = useState({ _id: '123' }); // Temporary, will be replaced with auth context

  // Temporary dummy data
  const [listing] = useState({
    id: '1',
    title: 'Mountain Retreat',
    image: { url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d' },
    owner: { _id: '123', username: 'JohnDoe' },
    description: 'Beautiful mountain cabin with amazing views',
    price: 15000,
    location: 'Mountains',
    country: 'India',
    reviews: [
      {
        id: '1',
        author: { username: 'User1' },
        rating: 4,
        comment: 'Great place!'
      }
    ]
  });

  const [reviewForm, setReviewForm] = useState({
    rating: 1,
    comment: ''
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', reviewForm);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="row mt-3">
        {/* Title */}
        <div className="col-8 offset-3">
          <h1 className="text-3xl font-bold">{listing.title}</h1>
        </div>

        {/* Listing Card */}
        <div className="cards col-6 offset-3 show-card listing-cards">
          <img 
            src={listing.image.url} 
            className="card-img-top show-img h-[30vh] w-full object-cover rounded-t-lg" 
            alt={listing.title}
          />
          <div className="card-body p-4">
            <p className="card-text italic">Owned by {listing.owner.username}</p>
            <p className="card-text mt-2">{listing.description}</p>
            <p className="card-text mt-2">₹{listing.price.toLocaleString("en-IN")}</p>
            <p className="card-text">{listing.location}</p>
            <p className="card-text">{listing.country}</p>
          </div>
        </div>
      </div>

      {/* Edit/Delete Buttons */}
      {currentuser && currentuser._id === listing.owner._id && (
        <div className="btns flex gap-4 mt-4">
          <a 
            href={`/listings/${listing.id}/edit`}
            className="btn bg-dark text-white px-4 py-2 rounded"
          >
            EDIT
          </a>
          <form method="post" action={`/listings/${listing.id}?_method=DELETE`}>
            <button className="btn bg-dark text-white px-4 py-2 rounded">
              DELETE
            </button>
          </form>
        </div>
      )}

      <hr className="my-6" />

      {/* Review Form */}
      {currentuser && (
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

            <button className="bg-dark text-white px-4 py-2 rounded">
              SUBMIT
            </button>
          </form>
        </div>
      )}

      {/* Reviews Section */}
      <h3 className="text-2xl font-bold mt-6 mb-4">REVIEWS</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listing.reviews.map((review) => (
          <div 
            key={review.id} 
            className="card review-card p-4 border rounded"
          >
            <div className="card-body">
              <h5 className="card-title font-bold">
                {review.author.username}
              </h5>
              <div className="my-2">
                <StarRating value={review.rating} readonly />
              </div>
              <p className="card-text">{review.comment}</p>
            </div>
            
            {currentuser && currentuser._id === review.author._id && (
              <form 
                method="post" 
                action={`/listings/${listing.id}/reviews/${review.id}?_method=DELETE`}
                className="mt-3"
              >
                <button className="bg-dark text-white px-3 py-1 rounded text-sm">
                  DELETE
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingDetail;