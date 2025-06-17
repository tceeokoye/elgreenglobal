
import { Search, TrendingUp, Globe, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            China's Leading B2B Platform
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Connect with millions of suppliers and discover quality products from China
          </p>

          {/* Search section */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-xl text-gray-800 mb-12">
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Product Keywords</label>
                <input
                  type="text"
                  placeholder="e.g. mobile phone, textile..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Categories</option>
                  <option>Electronics</option>
                  <option>Machinery</option>
                  <option>Textiles</option>
                  <option>Chemicals</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Supplier Location</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>All Regions</option>
                  <option>Guangdong</option>
                  <option>Zhejiang</option>
                  <option>Jiangsu</option>
                  <option>Shanghai</option>
                </select>
              </div>
            </div>
            <button className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Search Now
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-2">2M+</div>
              <div className="text-blue-200">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-2">500K+</div>
              <div className="text-blue-200">Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
