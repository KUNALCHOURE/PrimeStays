// src/components/Listings/ListingCard.jsx
import { Link } from 'react-router-dom';

const ListingCard = ({ listing, showTax }) => {
  return (
    <Link 
      to={`/listings/${listing._id}`} 
      className="group block no-underline text-inherit"
    >
      <div className="border-none mb-4 transition-transform duration-200 hover:-translate-y-1">
        <div className="relative">
          <img 
            src={listing.image?.url || "https://cdn.pixabay.com/photo/2017/06/13/12/33/hotel-2391347_1280.jpg"} 
            alt={listing.title}
            className="w-full h-80 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-xl" />
        </div>
        
        <div className="mt-2">
          <h3 className="font-bold text-lg">{listing.title}</h3>
        
          <p className="text-gray-700">
          ₹
          {showTax
              ?(listing.price * 1.18)?.toLocaleString("en-IN")
              :listing.price?.toLocaleString("en-IN") 
          }/night
            </p>
                 
          
          <p className="text-gray-600">{listing.location}</p>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;