
import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const logo = <img className="h-[50px] " src="/assets/logo.png" alt="my logo" />

  return (
  <header className="bg-white shadow-lg w-full z-50 fixed mb-20">
  {/* Top contact bar */}
  <div className="bg-green-600 text-white py-2">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <a href="tel:+15551234567" className="hover:text-green-200 transition-colors">
              +2348062626622
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <a href="mailto:elgreenglobalconsult@gmail.com " className="hover:text-green-200 transition-colors">
              elgreenglobalconsult@gmail.com 
            </a>
          </div>
        </div>
        <span className="hidden sm:block">Professional Cleaning Services</span>
      </div>
    </div>
  </div>

  {/* Main header */}
  <div className="container mx-auto px-4 py-1">
    <div className="flex items-center justify-between">
      <Link to="/">{logo}</Link>

      {/* Desktop Navigation with 3D perspective */}
      <div className="perspective-[1000px]">
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About Us' },
            { path: '/gallery', label: 'Gallery' },
            { path: '/contact', label: 'Contact' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-medium transform transition duration-300 ease-in-out hover:scale-105 hover:rotate-x-3 hover:rotate-y-1 hover:shadow-lg ${
                isActive(path)
                  ? 'text-green-600 border-b-2 border-green-600 pb-1'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/2348062626622"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Get Quote
          </a>
        </nav>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>

    {/* Mobile menu */}
    {isMenuOpen && (
      <div className="md:hidden mt-4 py-4 border-t border-gray-200">
        <nav className="flex flex-col space-y-4">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About Us' },
            { path: '/gallery', label: 'Gallery' },
            { path: '/contact', label: 'Contact' },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-medium transition-colors ${
                isActive(path) ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://wa.me/2348062626622"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium w-full text-center"
          >
            Get Quote
          </a>
        </nav>
      </div>
    )}
  </div>
</header>

  );
};

export default Header;
