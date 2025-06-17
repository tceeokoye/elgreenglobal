
import { MapPin, Users, Calendar, Award } from "lucide-react";

const CompanyListings = () => {
  const companies = [
    {
      id: 1,
      name: "Shenzhen Tech Industries Co., Ltd",
      location: "Shenzhen, Guangdong",
      established: "2010",
      employees: "500-1000",
      mainProducts: "Consumer Electronics, Mobile Accessories",
      certification: "ISO 9001, CE, FCC",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop",
      verified: true
    },
    {
      id: 2,
      name: "Guangzhou Solar Energy Ltd",
      location: "Guangzhou, Guangdong",
      established: "2008",
      employees: "200-500",
      mainProducts: "Solar Panels, LED Lighting, Energy Storage",
      certification: "ISO 14001, TUV, UL",
      logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=80&h=80&fit=crop",
      verified: true
    },
    {
      id: 3,
      name: "Hangzhou Textile Manufacturing",
      location: "Hangzhou, Zhejiang",
      established: "2005",
      employees: "1000+",
      mainProducts: "Garments, Fabrics, Home Textiles",
      certification: "OEKO-TEX, GOTS, BSCI",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=80&fit=crop",
      verified: true
    },
    {
      id: 4,
      name: "Dongguan Precision Machinery",
      location: "Dongguan, Guangdong",
      established: "2012",
      employees: "100-200",
      mainProducts: "CNC Parts, Industrial Equipment, Automation",
      certification: "ISO 9001, TS 16949",
      logo: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=80&h=80&fit=crop",
      verified: true
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Featured Suppliers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with verified manufacturers and trading companies from across China
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  {company.verified && (
                    <div className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full p-1">
                      <Award className="w-3 h-3" />
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                    {company.name}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {company.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      Est. {company.established}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      {company.employees} employees
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">Main Products:</div>
                    <div className="text-sm text-gray-600">{company.mainProducts}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-1">Certifications:</div>
                    <div className="flex flex-wrap gap-1">
                      {company.certification.split(', ').map((cert, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Contact Now
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Browse All Suppliers
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyListings;
