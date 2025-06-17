
import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "China's Manufacturing Sector Shows Strong Recovery in Q4",
      excerpt: "Latest data shows significant growth in Chinese manufacturing output with increased export orders from international buyers.",
      date: "Dec 15, 2024",
      category: "Industry News",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "New Trade Regulations Announced for 2025",
      excerpt: "Government announces updated import/export regulations that will affect international trade partnerships.",
      date: "Dec 12, 2024",
      category: "Trade Policy",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Sustainability Focus Drives Innovation in Chinese Factories",
      excerpt: "More manufacturers are adopting green technologies and sustainable practices to meet global environmental standards.",
      date: "Dec 10, 2024",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "E-commerce Integration Boosts B2B Platform Growth",
      excerpt: "Integration of advanced e-commerce features has led to a 40% increase in successful business connections.",
      date: "Dec 8, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Industry News & Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends and developments in Chinese manufacturing and international trade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
