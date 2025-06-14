
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-playfair text-pink-400 mb-4">
              Oluwatomiwa Oyedele
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional Virtual Assistant with expertise in administrative support, 
              project management, and business operations. ALX certified and ready to 
              help streamline your business processes.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-playfair text-pink-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/services" 
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="/portfolio" 
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-playfair text-pink-400 mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  oluwatomiwa@example.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  +234 (0) 123 456 7890
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-pink-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Oluwatomiwa Oyedele. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Built with passion and dedication
          </p>
        </div>
      </div>
    </footer>
  );
};
