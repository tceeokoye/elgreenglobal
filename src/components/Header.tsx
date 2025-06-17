
import { Search, Globe, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <span>Welcome to Elgreen Global Consult, Your Partner in Comprehensive Environmental Solutions</span>
            <div className="hidden md:flex items-center space-x-4">
              <span className="flex items-center"><Globe className="w-4 h-4 mr-1" />English</span>
              <span>Help Center</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">ElGreen Global Consult</h1>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, suppliers, categories..."
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Suppliers</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Trade Shows</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">News</a>
            <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5 mr-1" />
              Sign In
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Suppliers</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Trade Shows</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">News</a>
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5 mr-1" />
                Sign In
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
