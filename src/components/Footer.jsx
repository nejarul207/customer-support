import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12 mb-3">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="text-xl font-semibold">Ticket System</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A ticket system tracks and manages customer or technical issues.
              Each request becomes a “ticket,” assigned, updated, and resolved
              systematically—improving communication, accountability, and support efficiency across teams.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Our Mission</a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Contact Sales</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Products & Services</a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Customer Stories</a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Download Apps</a>
            </div>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors">Join Us</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Social Links</h4>
            <div className="flex flex-col items-start space-y-3">
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
                >
                  <FaFacebookF size={18} />
                </a>
                <span>Facebook</span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <span>LinkedIn</span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="https://x.com"
                  target="_blank"
                  className="bg-gray-700 p-2 rounded-full hover:bg-gray-800 transition"
                >
                  <FaXTwitter size={18} />
                </a>
                <span>X (Twitter)</span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="mailto:support@cs.com"
                  className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
                >
                  <FaEnvelope size={18} />
                </a>
                <span>Email</span>
              </div>
            </div>
          </div>




        </div>
         <div class=" mt-5">© 2025 CS — Ticket System. All rights reserved.</div>


      </div>

    </footer>
  );
};

export default Footer;
