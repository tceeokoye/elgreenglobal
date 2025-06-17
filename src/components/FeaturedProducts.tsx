
import { Star, Eye, Heart } from "lucide-react";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: "$25.00 - $35.00",
      minOrder: "100 pieces",
      supplier: "Shenzhen Audio Tech",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "LED Solar Street Light",
      price: "$85.00 - $120.00",
      minOrder: "50 pieces",
      supplier: "Guangzhou Solar Co.",
      rating: 4.9,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Cotton T-Shirt Collection",
      price: "$3.50 - $8.00",
      minOrder: "500 pieces",
      supplier: "Hangzhou Textile Ltd",
      rating: 4.7,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Smart Watch Fitness Tracker",
      price: "$15.00 - $25.00",
      minOrder: "200 pieces",
      supplier: "Dongguan Electronics",
      rating: 4.6,
      reviews: 178,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Stainless Steel Water Bottle",
      price: "$4.00 - $8.00",
      minOrder: "300 pieces",
      supplier: "Yiwu Trading Co.",
      rating: 4.8,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop"
    },
    {
      id: 6,
      name: "USB Cable Charging Set",
      price: "$1.50 - $3.00",
      minOrder: "1000 pieces",
      supplier: "Shenzhen Cable Tech",
      rating: 4.5,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked products from our top-rated suppliers with competitive prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors">
                    <Eye className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>
                <div className="text-blue-600 font-bold text-lg mb-1">
                  {product.price}
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  MOQ: {product.minOrder}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {product.supplier}
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Contact Supplier
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View More Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
