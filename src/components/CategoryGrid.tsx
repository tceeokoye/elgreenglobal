
import { Smartphone, Car, Shirt, Zap, Wrench, Home, Gamepad2, Baby } from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    { name: "Electronics", icon: Smartphone, count: "250K+ products", color: "bg-blue-500" },
    { name: "Automotive", icon: Car, count: "180K+ products", color: "bg-red-500" },
    { name: "Apparel", icon: Shirt, count: "320K+ products", color: "bg-purple-500" },
    { name: "Energy", icon: Zap, count: "90K+ products", color: "bg-yellow-500" },
    { name: "Machinery", icon: Wrench, count: "150K+ products", color: "bg-gray-600" },
    { name: "Home & Garden", icon: Home, count: "200K+ products", color: "bg-green-500" },
    { name: "Sports", icon: Gamepad2, count: "80K+ products", color: "bg-orange-500" },
    { name: "Mother & Baby", icon: Baby, count: "60K+ products", color: "bg-pink-500" }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover millions of products across various categories from verified suppliers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white border border-gray-200 rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${category.color} rounded-lg flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">
                {category.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-500">{category.count}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
