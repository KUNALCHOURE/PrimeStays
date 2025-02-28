// src/components/Listings/FilterBar.jsx
import { 
    FaFire, 
    FaBed, 
    FaCity, 
    FaMountain, 
    FaFortAwesome, 
    FaSnowflake, 
    FaCampground, 
    FaIgloo, 
    FaShip 
  } from 'react-icons/fa';
  import { GiCow } from 'react-icons/gi';
  
  const filters = [
    { icon: <FaFire />, label: "TRENDING" },
    { icon: <FaBed />, label: "ROOMS" },
    { icon: <FaCity />, label: "Iconic cities" },
    { icon: <FaMountain />, label: "Mountains" },
    { icon: <FaFortAwesome />, label: "Castles" },
    { icon: <FaSnowflake />, label: "Arctic" },
    { icon: <FaCampground />, label: "Camping" },
    { icon: <GiCow />, label: "Farms" },
    { icon: <FaIgloo />, label: "Dome" },
    { icon: <FaShip />, label: "Boats" }
  ];
  
  const FilterBar = ({ activeFilter, onFilterChange }) => {
    return (
      <div className="flex flex-wrap items-center gap-8 mb-8">
        {filters.map((filter, index) => (
          <div 
            key={index}
            onClick={() => onFilterChange(filter.label)}
            className={`flex flex-col items-center cursor-pointer transition-all
              ${activeFilter === filter.label 
                ? 'opacity-100 scale-110' 
                : 'opacity-70 hover:opacity-100'}`}
          >
            <div className="text-xl mb-1">{filter.icon}</div>
            <p className="text-sm">{filter.label}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default FilterBar;