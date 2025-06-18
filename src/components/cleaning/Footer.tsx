// Footer.jsx
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const logo = (
    <img
      className="bg-white rounded-md h-[50px]"
      src="/assets/logo.png"
      alt="Elgreen Logo"
    />
  );

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/">{logo}</Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional cleaning services you can trust. We transform spaces
              with eco-friendly solutions and exceptional attention to detail.
            </p>
            <div className="flex flex-wrap justify-start gap-4 mt-4">
              <a
                href="https://www.facebook.com/share/16LRX6PPTy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-6 h-6 text-gray-400 hover:text-green-400" />
              </a>
              <a
                href="https://www.instagram.com/elgreenglobalconsult?igsh=MXdneXpscDAyN2lnZQ== "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 text-gray-400 hover:text-green-400" />
              </a>
            
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "industrial-cleaning" }}
                  className="text-gray-400 hover:text-white"
                >
                  Industrial & Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "property-maintenance" }}
                  className="text-gray-400 hover:text-white"
                >
                  Property Maintenance & Facility Management
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "horticulture" }}
                  className="text-gray-400 hover:text-white"
                >
                  Horticulture & Landscaping
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "agriculture" }}
                  className="text-gray-400 hover:text-white"
                >
                  Agricultural Production
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "pest-control" }}
                  className="text-gray-400 hover:text-white"
                >
                  Fumigation & Pest Control
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "contracting" }}
                  className="text-gray-400 hover:text-white"
                >
                  General Contracting
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  state={{ scrollTo: "waste-management" }}
                  className="text-gray-400 hover:text-white"
                >
                  Waste Disposal & Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/2348062626622"
                  className="text-gray-400 hover:text-white"
                >
                  Get Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                <a
                  href="tel:+2348062626622"
                  className="text-gray-400 hover:text-white"
                >
                  +2348062626622
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-400 mr-3" />
                <a
                  href="mailto:elgreenglobalconsult@gmail.com"
                  className="text-gray-400 hover:text-white"
                >
                  elgreenglobalconsult@gmail.com
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1" />
                <a
                  href="https://www.google.com/maps/search/Road+1+Close,+Area+5+Agbama+housing+Estate++Umuahia,+Abia+state/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  Road 1 Close, Area 5 Agbama housing Estate
                  <br />
                  Umuahia, Abia state
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ELGREEN. All rights reserved.
            </p>
            {/* Uncomment below if you want Terms/Privacy/Cookies */}
            {/* <div className="flex space-x-6">
              <a
                href="/terms"
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Service
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm"
              >
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
