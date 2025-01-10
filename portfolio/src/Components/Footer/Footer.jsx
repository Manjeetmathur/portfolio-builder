import React from 'react';

const Footer = () => {
  return (
    <div className="from-gray-900 via-gray-950 to-gray-900 
      bg-gradient-to-bl py-12 text-white flex justify-center items-center">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Your Port</h2>
            <p className="text-sm md:text-base">
              Make Your Mirror with Your Port
            </p>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-gray-400 font-semibold">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400 font-semibold">About Us</a></li>
              <li><a href="#services" className="hover:text-gray-400 font-semibold">Services</a></li>
              <li><a href="#contact" className="hover:text-gray-400 font-semibold">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><span className="font-medium">Email:</span> manjeetkumar62054@gmail.com</li>
              <li><span className="font-medium">Phone:</span> +91 6287773228</li>
              <li><span className="font-medium">Address:</span> Giridih, Jharkhand, 815317.</li>
            </ul>
          </div>
          
          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="https://instagram.com" className="hover:text-gray-400">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Port. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
