import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState(''); // '' or 'user' or 'hotel_lister'

  // Form data matching exactly with User Schema
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    fullname: "",
    role: "user" // default role as per schema
  });

  const [validation, setValidation] = useState({
    username: false,
    email: false,
    password: false,
    fullname: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setValidation((prev) => ({
      ...prev,
      [name]: e.target.checkValidity(),
    }));
  };

  // Initial selection screen
  if (!userType) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">
            CHOOSE ACCOUNT TYPE
          </h1>
          <div className="space-y-4">
            <button
              onClick={() => {
                setUserType('user');
                setFormData(prev => ({ ...prev, role: 'user' }));
              }}
              className="w-full p-6 text-left border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-semibold">Regular User</h3>
              <p className="text-gray-600 mt-2">
                Book accommodations and write reviews
              </p>
            </button>
            <button
              onClick={() => {
                setUserType('hotel_lister');
                setFormData(prev => ({ ...prev, role: 'hotel_lister' }));
              }}
              className="w-full p-6 text-left border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-xl font-semibold">Hotel Lister</h3>
              <p className="text-gray-600 mt-2">
                List and manage your properties
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      toast.error("Please fill all required fields correctly");
      return;
    }

    setLoading(true);
    try {
      await register(formData);
      toast.success(`Welcome to Wanderlust as a ${userType === 'hotel_lister' ? 'Hotel Lister' : 'User'}!`);
      navigate("/listings");
    } catch (err) {
      console.error("Signup Error:", err);
      const errorMessage = err?.message || "Signup failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          {userType === 'hotel_lister' ? 'HOTEL LISTER SIGNUP' : 'USER SIGNUP'}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          noValidate
        >
          {/* Username Field */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${validation.username 
                  ? "border-green-500 focus:ring-green-500" 
                  : "border-gray-300 focus:ring-primary"}`}
              placeholder="Enter Username"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${validation.email 
                  ? "border-green-500 focus:ring-green-500" 
                  : "border-gray-300 focus:ring-primary"}`}
              placeholder="Enter Email"
              required
            />
          </div>

          {/* Full Name Field */}
          <div className="mb-6">
            <label htmlFor="fullname" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                ${validation.fullname 
                  ? "border-green-500 focus:ring-green-500" 
                  : "border-gray-300 focus:ring-primary"}`}
              placeholder="Enter Full Name"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary border-gray-300"
                placeholder="Enter Password"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <button
              type="button"
              onClick={() => setUserType('')}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing up...
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;