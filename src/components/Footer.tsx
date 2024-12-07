import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Techsol</h3>
            <p className="text-sm">
              Agency website using ReactJS for mini project 3rd Sem CSE section B SSTC
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-sm">SSTC, Bhilai Chhattisgarh</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Github className="h-6 w-6 hover:text-white cursor-pointer" />
              <Linkedin className="h-6 w-6 hover:text-white cursor-pointer" />
              <Mail className="h-6 w-6 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Techsol. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;