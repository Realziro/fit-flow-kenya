
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kenya-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-kenya-green-light">BAMS GYM</span>
              <span className="text-sm bg-kenya-red text-white px-1 rounded">Kenya</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming lives through fitness, one workout at a time. Join our community and experience 
              the best gym facilities in Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-kenya-green-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-kenya-green-light transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-kenya-green-light transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-kenya-green-light transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-kenya-green-light transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-kenya-green-light transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-kenya-green-light transition-colors">Pricing</Link></li>
              <li><Link to="/trainers" className="text-gray-300 hover:text-kenya-green-light transition-colors">Our Trainers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-kenya-green-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="mr-3 h-5 w-5 text-kenya-green-light" />
                <span className="text-gray-300">123 Fitness Avenue, Nairobi, Kenya</span>
              </li>
              <li className="flex">
                <Phone className="mr-3 h-5 w-5 text-kenya-green-light" />
                <span className="text-gray-300">+254 712 345 678</span>
              </li>
              <li className="flex">
                <Mail className="mr-3 h-5 w-5 text-kenya-green-light" />
                <span className="text-gray-300">info@bamsgym.com</span>
              </li>
              <li className="flex">
                <Clock className="mr-3 h-5 w-5 text-kenya-green-light" />
                <div className="text-gray-300">
                  <p>Monday - Friday: 5am - 10pm</p>
                  <p>Weekends: 7am - 8pm</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-kenya-green-light"
              />
              <button type="submit" className="bg-kenya-green hover:bg-kenya-green-light text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BAMS GYM Kenya. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
