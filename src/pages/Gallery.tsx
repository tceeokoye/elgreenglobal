import React, { useState, useEffect } from "react";
import { Play, Image, X } from "lucide-react";
import Header from "@/components/cleaning/Header";
import Footer from "@/components/cleaning/Footer";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<"all" | "images" | "videos">(
    "all"
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedMedia(null);
      }
    };
    if (selectedMedia) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [selectedMedia]);

  const mediaItems = [
    {
      id: 1,
      type: "image",
      url: "/gallary/image3.jpg",
      title: "Professional House Cleaning",
      category: "Residential",
    },
    {
      id: 2,
      type: "image",
      url: "/gallary/image2.jpg",
      title: "Modern Clean Home",
      category: "Residential",
    },
    {
      id: 3,
      type: "image",
      url: "/gallary/image4.jpg",
      title: "Office Cleaning Process",
      category: "Commercial",
    },
    {
      id: 4,
      type: "image",
      url: "/gallary/image5.jpg",
      title: "Office Cleaning Process",
      category: "Commercial",
    },
    {
      id: 5,
      type: "video",
      url: "/gallary/video1.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Deep Cleaning",
      category: "Services",
    },
    {
      id: 7,
      type: "image",
      url: "/gallary/image7.jpg",
      title: "Professional House Cleaning",
      category: "Residential",
    },
    {
      id: 8,
      type: "image",
      url: "/gallary/image8.jpg",
      title: "House Cleaning process",
      category: "Residential",
    },
    {
      id: 9,
      type: "image",
      url: "/gallary/image9.jpg",
      title: "Modern Clean Home",
      category: "Residential",
    },
    {
      id: 10,
      type: "image",
      url: "/gallary/image10.jpg",
      title: "Complex Cleaning",
      category: "Commercial",
    },
    {
      id: 11,
      type: "image",
      url: "/gallary/image11.jpg",
      title: "Before",
      category: "Results",
    },
    {
      id: 12,
      type: "image",
      url: "/gallary/image12.jpg",
      title: "After",
      category: "Results",
    },
    {
      id: 13,
      type: "image",
      url: "/gallary/image13.jpg",
      title: "Work in progress",
      category: "Results",
    },
    {
      id: 14,
      type: "image",
      url: "/gallary/image14.jpg",
      title: "Before & After",
      category: "Results",
    },
    {
      id: 15,
      type: "image",
      url: "/gallary/image15.jpg",
      title: "Professional House Cleaning",
      category: "Residential",
    },

    {
      id: 16,
      type: "image",
      url: "/gallary/image17.jpg",
      title: "Industrial Facility Cleaning",
      category: "Industrial",
    },
 
    {
      id: 17,
      type: "image",
      url: "/gallary/image19.jpg",
      title: "Complex cleaning",
      category: "Commercial",
    },
    {
      id: 18,
      type: "image",
      url: "/gallary/image20.jpg",
      title: "Professional House Cleaning",
      category: "Residential",
    },
    {
      id: 19,
      type: "image",
      url: "/gallary/image21.jpg",
      title: "Professional House Cleaning",
      category: "Residential",
    },
    {
      id: 20,
      type: "image",
      url: "/gallary/image22.jpg",
      title: "pig farming",
      category: "Swine barn",
    },
    {
      id: 22,
      type: "image",
      url: "/gallary/image23.jpg",
      title: "Fish Pond Services",
      category: "Fish Pond",
    },
    {
      id: 23,
      type: "image",
      url: "/gallary/image24.jpg",
      title: "Fish Pond Services",
      category: "Fish Pond",
    },
    {
      id: 24,
      type: "image",
      url: "/gallary/image25.jpg",
      title: "pig farming",
      category: "Swine barn",
    },
  ];

  const filteredMedia = mediaItems.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "images") return item.type === "image";
    if (activeTab === "videos") return item.type === "video";
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white  py-16 md:py-24">
        <div className="container pt-20 mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Our Work Gallery</h1>
          <p className="text-lg text-green-100">
            See the quality of our cleaning services
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-lg flex gap-2">
              {[
                { key: "all", label: "All Media" },
                { key: "images", label: "Photos" },
                { key: "videos", label: "Videos" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-4 py-2 rounded-md font-medium ${
                    activeTab === tab.key
                      ? "bg-green-600 text-white"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  {item.type === "video" ? (
                    <video
                      src={item.url}
                      poster={item.thumbnail}
                      controls
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}

                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <button
                        onClick={() => setSelectedMedia(item)}
                        className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700"
                      >
                        <Play className="w-6 h-6" />
                      </button>
                    </div>
                  )}

                  {item.type === "image" && (
                    <div className="absolute top-3 right-3">
                      <Image className="w-5 h-5 text-white drop-shadow-lg" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button
                        onClick={() => setSelectedMedia(item)}
                        className="w-full bg-white/90 text-gray-800 py-2 px-4 rounded-lg font-medium"
                      >
                        {item.type === "video" ? "Watch Video" : "View Image"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-green-600 font-medium">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedMedia.type === "video" ? (
              <video
                src={selectedMedia.url}
                controls
                autoPlay
                className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
              />
            ) : (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.title}
                className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
              />
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
