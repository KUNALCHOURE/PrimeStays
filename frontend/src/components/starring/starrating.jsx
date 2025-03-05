// src/components/StarRating/StarRating.jsx
import React from 'react';
import './starring.css';

const StarRating = ({ 
  value = 0, 
  onChange = () => {}, 
  readonly = false 
}) => {
  const handleRatingChange = (rating) => {
    if (!readonly) {
      onChange(rating);
    }
  };

  return (
    <fieldset className="starability-slot">
      {/* No rating option */}
      <input
        type="radio"
        id="no-rate"
        className="input-no-rate"
        name="rating"
        value="0"
        checked={value === 0}
        onChange={() => handleRatingChange(0)}
        disabled={readonly}
      />

      {/* Star ratings */}
      {[5, 4, 3, 2, 1].map((rating) => (
        <React.Fragment key={rating}>
          <input
            type="radio"
            id={`rate${rating}`}
            name="rating"
            value={rating}
            checked={value === rating}
            onChange={() => handleRatingChange(rating)}
            disabled={readonly}
            className={`input-${rating}`}
          />
          <label 
            htmlFor={`rate${rating}`}
            title={
              rating === 1 ? "Terrible" : 
              rating === 2 ? "Not good" :
              rating === 3 ? "Average" :
              rating === 4 ? "Very good" : 
              "Amazing"
            }
          >
            {rating} stars
          </label>
        </React.Fragment>
      ))}
    </fieldset>
  );
};

export default StarRating;