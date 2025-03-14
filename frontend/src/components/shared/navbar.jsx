import { Link } from "react-router-dom";
import { FaCompass } from "react-icons/fa";
import { useAuth } from "../../context/authcontext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logout, isHotelLister } = useAuth();

  return (
    <motion.nav
      className="h-20 bg-gray-900 text-white shadow-md fixed w-full top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/listings" className="flex items-center space-x-2">
          <FaCompass className="text-red-500 text-4xl" />
          <span className="text-2xl font-bold tracking-wide">PrimeStays</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-lg font-medium">
          {user ? (
            <>
              <span className="text-gray-300">Welcome, {user.username}</span>
              {isHotelLister() && (
                <Link
                  to="/listings/new"
                  className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition-all"
                >
                  Add Listing
                </Link>
              )}
              <motion.button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition-all"
              >
                Login
              </Link>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/signup"
                  className="bg-red-500 text-white px-4 py-2 rounded-md shadow hover:bg-red-600 transition-all"
                >
                  Signup
                </Link>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;