// src/components/StarRating/StarabilityResult.jsx
import './starring.css'

const StarabilityResult = ({ rating }) => {
  return (
    <div 
      className="starability-result" 
      data-rating={rating}
    />
  );
};

export default StarabilityResult;