// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom';
import { FaCompass } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="h-20 bg-white shadow-sm"> {/* height: 5rem */}
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center">
            <FaCompass className="text-[#fe424d] text-4xl" /> {/* font-size: 2rem, color: #fe424d */}
            <span className="ml-2 text-xl font-semibold">Wonderlust</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link 
              to="/login"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;