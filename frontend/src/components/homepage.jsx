// src/pages/Home/Home.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../context/authcontext';
const Home = () => {
   const {user}=useAuth();

   
  return (
    <div className="min-h-[calc(100vh-64px)] relative">
      {/* Hero Section */}
      <div 
        className="h-[calc(100vh-64px)] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3')",
        }}
      >
        {user?(
         <>
           <div className="relative h-full flex flex-col items-center justify-center text-white px-4 mt-20">
           <div className="overlay absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
           <div className="relative z-10"> 
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Find Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8">
            Discover unique stays and experiences around the world
          </p>
          
          <div className="flex gap-4 justify-center ">
            <Link 
              to="/listings" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Lets get Started 
            </Link>
           
          </div>
        </div>
        </div>
        
         </>
        ):
        (
        <>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4 mt-20">
        <div className="overlay absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative z-10"> 
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Find Your Next Adventure
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8">
            Discover unique stays and experiences around the world
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link 
              to="/login" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Log In
            </Link>
            <Link 
              to="/signup" 
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
        </div>
        
        </>
        )}
       
        
          
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Primestays?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Global Destinations</h3>
              <p className="text-gray-600">
                Explore unique stays in every corner of the world
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Verified Stays</h3>
              <p className="text-gray-600">
                Quality checked accommodations for your peace of mind
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-semibold mb-2">Unique Experiences</h3>
              <p className="text-gray-600">
                Create memories that last a lifetime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;