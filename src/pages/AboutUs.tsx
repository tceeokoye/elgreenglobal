import React, { useState } from "react";
import Header from "@/components/cleaning/Header";
import Footer from "@/components/cleaning/Footer";
import {
  Users,
  Award,
  Handshake,
  ShieldCheck,
  Lightbulb,
  Smile,
  Leaf,
  X,
} from "lucide-react";

const AboutUs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const values = [
    {
      icon: ShieldCheck,
      title: "INTEGRITY",
      description:
        "We conduct our business with honesty, transparency, and ethical practices, building trust through consistent and reliable service delivery",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in everything we do, from service delivery to customer relationships, ensuring that quality is never compromised.",
    },
    {
      icon: Leaf,
      title: "SUSTAINABILITY",
      description:
        "We are committed to environmentally responsible practices that protect our planet while meeting the needs of present and future generations",
    },
    {
      icon: Lightbulb,
      title: "INNOVATION",
      description:
        "We embrace new technologies, methods, and ideas that improve service quality, efficiency, and environmental impact.",
    },
    {
      icon: Smile,
      title: "CUSTOMER FOCUS ",
      description:
        "Our clients are at the center of everything we do. We listen, understand, and deliver solutions that exceed expectations.",
    },
    {
      icon: Users,
      title: "TEAMWORK",
      description:
        "We are committed to contributing positively to the communities we serve through job creation, skill development, and environmental stewardship.",
    },
    {
      icon: Handshake,
      title: "COMMUNITY RESPONSIBILITY ",
      description:
        "We believe in the power of collaboration, both within our team and with our clients, to achieve exceptional results.",
    },
  ];

  const team = [
    {
      name: "Mr. Akpan Nsikak Elyon",
      role: "Founder & CEO",
      image: "/Founder/founder.jpg",
      bio: "Mr. Akpan Nsikak Elyon is the visionary founder and Chief Executive Officer of ElGreen Global Consult. With extensive experience in environmental services and business management, he has successfully built ElGreen into one of Nigeria's most trusted names in comprehensive facility and environmental solutions.",
      details: {
        "Professional Background":
          "Mr. Elyon's entrepreneurial journey began with a simple yet powerful vision: to create cleaner, healthier environments that enhance productivity and quality of life. His deep understanding of both technical service delivery and business strategy has enabled ElGreen to expand across multiple service verticals while maintaining the highest standards of quality.",
        "Leadership Philosophy":
          "Under his leadership, ElGreen Global Consult has embraced innovation, sustainability, and customer-centricity as core pillars. Mr. Elyon believes in empowering his team of professionals to deliver exceptional results while building long-term partnerships with clients.",
        "Personal Commitment":
          "Beyond business success, Mr. Elyon is committed to contributing to Nigeria's economic development through quality service delivery, job creation, and environmental stewardship. He continues to drive the company's expansion while maintaining its founding values of integrity, excellence, and service.",
      },
    },

    {
      name: "Br. Mrs. Chisom Selina Ogbeyalu Elyon",
      role: "Legal & Operations Manager",
      image: "/Founder/co-founder.jpg",
      bio: "Chisom ensures our operations run smoothly and our team delivers consistent, high-quality service.",
      details:
        "Chisom Selina has over a decade of experience in operations and logistics. He plays a key role in planning, coordinating, and executing ELGREEEN’s daily operations.",
    },
    {
      name: "Blessing Effiong Asuquo",
      role: "Project Manager",
      image:
        "/Founder/manager.jpg",
      bio: "Blessing manages customer relationships and ensures every client receives personalized attention.",
      details:
        "Blessing brings a customer-first mindset with years of experience in support and communication. She ensures every client experience is seamless and satisfactory.",
    },
  ];

  const ceo = team[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 pt-40 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About ELGREEEN
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            ElGreen Global Consult stands as a beacon of excellence in Nigeria's
            environmental services sector. Established with a vision to
            transform how businesses and communities manage their environmental
            needs, we have grown from a local service provider to a diversified
            enterprise serving clients across multiple industries.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we serve
              our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white rounded-lg p-6"
              >
                <div className="w-20 h-20 bg-white border-4 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-green-400 transition-colors duration-300">
                  <value.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The dedicated professionals who make ELGREEEN the trusted choice
              for cleaning services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CEO Special Card */}
            <div
              className="text-center border rounded-lg p-4 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              onClick={() => setShowModal(true)}
            >
              <div className="relative mb-6">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {ceo.name}
              </h3>
              <div className="text-green-600 font-medium mb-4">{ceo.role}</div>
              <p className="text-gray-600 leading-relaxed mb-2">{ceo.bio}</p>
              <p className="text-white leading-relaxed rounded-sm bg-green-700 w-fit text-center m-auto px-2 py-1">
                Click to know more
              </p>
            </div>

            {/* Other team members */}
            {team.slice(1).map((member, index) => (
              <div
                key={index}
                className="text-center group border rounded-lg p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <div className="text-green-600 font-medium mb-4">
                  {member.role}
                </div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  {member.bio}
                </p>
                {expandedIndex === index &&
                  (typeof member.details === "string" ? (
                    <p className="text-sm text-gray-500 mb-3">
                      {member.details}
                    </p>
                  ) : (
                    <div className="text-sm text-gray-500 mb-3 space-y-2">
                      {Object.entries(member.details).map(
                        ([title, content], i) => (
                          <div key={i}>
                            <p className="font-semibold text-gray-700">
                              {title}
                            </p>
                            <p>{content}</p>
                          </div>
                        )
                      )}
                    </div>
                  ))}

                <button
                  onClick={() =>
                    setExpandedIndex(index === expandedIndex ? null : index)
                  }
                  className="text-green-600 hover:underline font-medium"
                >
                  {expandedIndex === index ? "Hide Details" : "View More"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <img
                src={ceo.image}
                alt={ceo.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {ceo.name}
              </h3>
              <div className="text-green-600 font-medium mb-4">{ceo.role}</div>
              <p className="text-gray-700 mb-4">{ceo.bio}</p>

              <div className="text-left space-y-4">
                {Object.entries(ceo.details).map(([title, content], idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-gray-800">{title}</h4>
                    <p className="text-gray-600 text-sm">{content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the ELGREEN Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who trust us with their
            cleaning needs
          </p>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-10 max-w-5xl mx-auto text-left">
            <div className="bg-green-700/60 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-green-100">
                To deliver world-class environmental and facility management
                solutions with integrity, innovation, and a focus on sustainable
                practices that improve lives and communities.
              </p>
            </div>
            <div className="bg-green-700/60 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="text-green-100">
                To be the leading force in shaping a cleaner, healthier, and
                more sustainable future across Nigeria and beyond.
              </p>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+2348062626622 text=Hello%20ELGREEEN%2C%20I%27d%20like%20to%20request%20a%20free%20cleaning%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg text-center"
            >
              Get Free Quote
            </a>

            <a
              href="tel:+2348062626622"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold text-lg text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
