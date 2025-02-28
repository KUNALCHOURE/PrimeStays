import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Updated formData to include fullName
  const [formData, setFormData] = useState({
    fullname: "", // Added fullName
    username: "",
    email: "",
    password: "",
  });

  // ✅ Updated validation state to include fullName
  const [validation, setValidation] = useState({
    fullname: false, // Added fullName validation
    username: false,
    email: false,
    password: false,
  });

  // ✅ Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validation feedback
    setValidation((prev) => ({
      ...prev,
      [name]: e.target.checkValidity(),
    }));
  };

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      toast.error("Please fill all required fields correctly");
      return;
    }

    setLoading(true);
    try {
      console.log("Attempting to register...");
      await register(formData); // Sending fullName as well
      toast.success("Welcome to Wanderlust!");
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
          SIGNUP ON WANDERLUST
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          noValidate
        >
          {/* ✅ Full Name Field */}
          <div className="mb-6">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
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
            {validation.fullname && (
              <p className="text-green-600 text-sm mt-1">Full Name looks good</p>
            )}
          </div>

          {/* ✅ Username Field */}
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
            {validation.username && (
              <p className="text-green-600 text-sm mt-1">Username looks good</p>
            )}
          </div>

          {/* ✅ Email Field */}
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
            {validation.email && (
              <p className="text-green-600 text-sm mt-1">Email looks good</p>
            )}
          </div>

          {/* ✅ Password Field */}
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

          {/* ✅ Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 
              transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
        </form>
      </div>
    </div>
  );
};

export default Signup;
