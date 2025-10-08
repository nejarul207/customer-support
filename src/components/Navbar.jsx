import React from 'react';
import { Plus, Home, HelpCircle, BarChart3, Download, Mail } from 'lucide-react';

const Navbar = ({ onNewTicket }) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CS</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">Ticket System</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors">
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors">
                <span>FAQ</span>
              </a>
              <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors">
                <span>Changelog</span>
              </a>
              <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors">
                
                <span>Blog</span>
              </a>
              <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors">
                <span>Download</span>
              </a>
              <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors">
                <span>Contact</span>
              </a>
            </div>

            {/* New Ticket Button */}
            <button
              onClick={onNewTicket}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-sm"
            >
              <Plus size={16} />
              <span>New Ticket</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={onNewTicket}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-lg"
            >
              <Plus size={16} />
              <span className="text-sm">New</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;