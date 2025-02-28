// src/components/StarRating/StarRating.jsx
import './starring.css'
const StarRating = ({ value, onChange, readonly }) => {
    return (
      <div className="starability-slot">
        <input
          type="radio"
          id="no-rate"
          className="input-no-rate"
          name="rating"
          value="1"
          checked={value === 1}
          onChange={() => !readonly && onChange(1)}
          disabled={readonly}
        />
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className="inline-block">
            <input
              type="radio"
              id={`rate${rating}`}
              name="rating"
              value={rating}
              checked={value === rating}
              onChange={() => !readonly && onChange(rating)}
              disabled={readonly}
            />
            <label
              htmlFor={`rate${rating}`}
              title={rating === 1 ? "Terrible" : 
                     rating === 2 ? "Not good" :
                     rating === 3 ? "Average" :
                     rating === 4 ? "Very good" : "Amazing"}
            >
              {rating} stars
            </label>
          </div>
        ))}
      </div>
    );
  };
  
  export default StarRating;