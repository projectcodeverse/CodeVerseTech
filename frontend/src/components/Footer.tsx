import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              CodeVerse<span className="text-accent">Tech</span>
            </h3>
            <p className="text-gray-400">
              Empowering the Future of Tech through innovation, creativity, and connection.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/internship" className="text-gray-400 hover:text-white">Internships</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mentorship</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📧 projectcodeserve@gmail.com</li>
              <li>📱 +91 8073473519</li>
              <li>📍 Chikodi, Karnataka, India</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CodeVerseTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;