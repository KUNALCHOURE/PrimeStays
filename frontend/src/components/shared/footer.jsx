import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-12 border-t-4 border-gray-700 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">About Us</h3>
          <p className="text-gray-400 text-sm">
            Experience luxury and comfort with our world-class hotel booking services. Find the perfect stay for your next trip with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 flex flex-col justify-center ">
          <h3 className="text-xl font-semibold text-center">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2 text-center ">
            <li><Link to="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            <li><Link to="/services" className="hover:text-red-500 transition-colors">Services</Link></li>
            <li><Link to="/faq" className="hover:text-red-500 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4 text-center">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center sm:justify-start md:justify-center space-x-4 text-2xl">
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600"
              whileHover={{ scale: 1.2, rotateY: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-pink-500"
              whileHover={{ scale: 1.2, rotateY: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700"
              whileHover={{ scale: 1.2, rotateY: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
            <motion.a
              href="#"
              className="w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-blue-400"
              whileHover={{ scale: 1.2, rotateY: 360 }}
              transition={{ duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Luxury Stays. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Link to="/privacy" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Link to="/terms" className="hover:text-red-500 transition-colors">
              Terms & Conditions
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;