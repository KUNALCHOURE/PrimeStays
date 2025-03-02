// src/pages/Listings/ListingDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../../components/starring/starrating';
import StarabilityResult from '../../components/starring/starabilityresult';
import api from '../../services/api';


const ListingDetail = () => {
  const { id } = useParams();
  const [currentuser] = useState({ _id: '123' }); // Temporary, will be replaced with auth context
  const [currentlisting,setcurrentlisting]=useState({});
  // Temporary dummy data
 
useEffect(()=>{
  console.log(id);
  const fetchData = async () => {
     getlistingdata();
};
fetchData();
},[])
    const getlistingdata=async()=>{
       try{
       const response =await api.get(`/listings/${id}`);
       console.log(response.data);
       console.log(response.data.data)
       setcurrentlisting(response.data.data);
       }
       catch(e){
        console.error("error while fetching details",e);
  
       }

    }
  const [reviewForm, setReviewForm] = useState({
    rating: 1,
    comment: ''
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    console.log('Review submitted:', reviewForm);
  };

  return (
    <h1> hello</h1>
  //   <div className="container mx-auto px-4">
  //     <div className="row mt-3">
  //       {/* Title */}
  //       <div className="col-8 offset-3">
  //         <h1 className="text-3xl font-bold">{currentlisting.title}</h1>
  //       </div>

  //       {/* Listing Card */}
  //       <div className="cards col-6 offset-3 show-card listing-cards">
  //         <img 
  //          // src={currentlisting.image.url} 
  //           className="card-img-top show-img h-[30vh] w-full object-cover rounded-t-lg" 
  //           alt={currentlisting.title}
  //         />
  //         <div className="card-body p-4">
  //           <p className="card-text italic">Owned by {currentlisting.owner.username}</p>
  //           <p className="card-text mt-2">{currentlisting.description}</p>
  //           <p className="card-text mt-2">₹{currentlisting.price.toLocaleString("en-IN")}</p>
  //           <p className="card-text">{currentlisting.location}</p>
  //           <p className="card-text">{currentlisting.country}</p>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Edit/Delete Buttons */}
  //     {currentuser && currentuser._id === listing.owner._id && (
  //       <div className="btns flex gap-4 mt-4">
  //         <a 
  //           href={`/listings/${listing.id}/edit`}
  //           className="btn bg-dark text-white px-4 py-2 rounded"
  //         >
  //           EDIT
  //         </a>
  //         <form method="post" action={`/listings/${listing.id}?_method=DELETE`}>
  //           <button className="btn bg-dark text-white px-4 py-2 rounded">
  //             DELETE
  //           </button>
  //         </form>
  //       </div>
  //     )}

  //     <hr className="my-6" />

  //     {/* Review Form */}
  //     {currentuser && (
  //       <div className="col-8 offset-3 mb-3">
  //         <h4 className="text-xl font-bold mb-4">Leave a review</h4>
  //         <form 
  //           onSubmit={handleReviewSubmit}
  //           className="needs-validation"
  //           noValidate
  //         >
  //           <div className="mt-3 mb-3">
  //             <label className="block mb-2">Rating</label>
  //             <StarRating 
  //               value={reviewForm.rating}
  //               onChange={(rating) => setReviewForm(prev => ({...prev, rating}))}
  //             />
  //           </div>

  //           <div className="mt-3 mb-3">
  //             <label className="block mb-2">COMMENT</label>
  //             <textarea
  //               value={reviewForm.comment}
  //               onChange={(e) => setReviewForm(prev => ({
  //                 ...prev, 
  //                 comment: e.target.value
  //               }))}
  //               className="w-full p-2 border rounded"
  //               rows="5"
  //               required
  //             />
  //             <div className="invalid-feedback">
  //               Please add some comment
  //             </div>
  //           </div>

  //           <button className="bg-dark text-white px-4 py-2 rounded">
  //             SUBMIT
  //           </button>
  //         </form>
  //       </div>
  //     )}

  //     {/* Reviews Section */}
  //     <h3 className="text-2xl font-bold mt-6 mb-4">REVIEWS</h3>
  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //       {listing.reviews.map((review) => (
  //         <div 
  //           key={review.id} 
  //           className="card review-card p-4 border rounded"
  //         >
  //           <div className="card-body">
  //             <h5 className="card-title font-bold">
  //               {review.author.username}
  //             </h5>
  //             <div className="my-2">
  //               <StarRating value={review.rating} readonly />
  //             </div>
  //             <p className="card-text">{review.comment}</p>
  //           </div>
            
  //           {currentuser && currentuser._id === review.author._id && (
  //             <form 
  //               method="post" 
  //               action={`/listings/${listing.id}/reviews/${review.id}?_method=DELETE`}
  //               className="mt-3"
  //             >
  //               <button className="bg-dark text-white px-3 py-1 rounded text-sm">
  //                 DELETE
  //               </button>
  //             </form>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
   );
};

export default ListingDetail;