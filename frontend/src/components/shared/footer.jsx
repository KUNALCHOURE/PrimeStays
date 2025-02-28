// src/components/Footer/Footer.jsx
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#ebebeb] py-4 bottom-0" >
      <div className="flex flex-col items-center justify-center"> {/* f-info styles */}
        {/* Social Icons */}
        <div className="text-[1.2rem] mb-2"> {/* footer-icon styles */}
          <a 
            href="#"
            className="mx-2.5 text-gray-800 hover:text-gray-600"
          >
            <FaFacebookSquare />
          </a>
          <a 
            href="#"
            className="mx-2.5 text-gray-800 hover:text-gray-600"
          >
            <FaInstagramSquare />
          </a>
          <a 
            href="#"
            className="mx-2.5 text-gray-800 hover:text-gray-600"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="my-2 text-gray-800"> {/* name styles */}
          &copy; WONDERLUST PRIVATE LIMITED
        </div>

        {/* Links */}
        <div className="footer-links">
          <Link 
            to="/privacy" 
            className="mx-2.5 text-[#222222] hover:underline no-underline"
          >
            PRIVACY POLICY
          </Link>
          <Link 
            to="/terms" 
            className="mx-2.5 text-[#222222] hover:underline no-underline"
          >
            TERMS
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;