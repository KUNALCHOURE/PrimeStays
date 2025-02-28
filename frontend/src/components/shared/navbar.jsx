// src/components/Navbar/Navbar.jsx
import { Link } from 'react-router-dom';
import { FaCompass } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="h-20 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center">
            <FaCompass className="text-[#fe424d] text-4xl" />
            <span className="ml-2 text-xl font-semibold">Wonderlust</span>
          </Link>

          <div className="flex items-center space-x-4">
            {console.log(user)};
            {user? (
              <>
                <span className="text-gray-600 font-medium">
                  Welcome, {user.name}
                </span>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 hover:text-gray-900 font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;