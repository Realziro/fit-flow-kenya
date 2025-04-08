
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="sticky top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-kenya-green">FitFlow</span>
            <span className="text-sm bg-kenya-red text-white px-1 rounded">Kenya</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-kenya-green transition-colors">Home</Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-kenya-green transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/services/personal-training" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Personal Training</Link>
                  <Link to="/services/group-classes" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Group Classes</Link>
                  <Link to="/services/nutrition" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Nutrition Planning</Link>
                </div>
              </div>
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-kenya-green transition-colors">Pricing</Link>
            <Link to="/trainers" className="text-gray-700 hover:text-kenya-green transition-colors">Trainers</Link>
            <Link to="/contact" className="text-gray-700 hover:text-kenya-green transition-colors">Contact</Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-kenya-green text-kenya-green hover:bg-kenya-green hover:text-white">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-kenya-green hover:bg-kenya-green-light text-white">
                Register
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-kenya-green transition-colors px-4 py-2 hover:bg-gray-50 rounded-md">Home</Link>
              <div className="px-4 py-2">
                <button className="flex items-center text-gray-700 hover:text-kenya-green transition-colors w-full text-left">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/services/personal-training" className="block py-1 text-sm text-gray-700 hover:text-kenya-green">Personal Training</Link>
                  <Link to="/services/group-classes" className="block py-1 text-sm text-gray-700 hover:text-kenya-green">Group Classes</Link>
                  <Link to="/services/nutrition" className="block py-1 text-sm text-gray-700 hover:text-kenya-green">Nutrition Planning</Link>
                </div>
              </div>
              <Link to="/pricing" className="text-gray-700 hover:text-kenya-green transition-colors px-4 py-2 hover:bg-gray-50 rounded-md">Pricing</Link>
              <Link to="/trainers" className="text-gray-700 hover:text-kenya-green transition-colors px-4 py-2 hover:bg-gray-50 rounded-md">Trainers</Link>
              <Link to="/contact" className="text-gray-700 hover:text-kenya-green transition-colors px-4 py-2 hover:bg-gray-50 rounded-md">Contact</Link>
              <div className="pt-4 flex flex-col space-y-3">
                <Link to="/login">
                  <Button variant="outline" className="w-full border-kenya-green text-kenya-green hover:bg-kenya-green hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full bg-kenya-green hover:bg-kenya-green-light text-white">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
