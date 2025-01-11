import React from 'react';
import {Link} from 'react-router-dom'
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
              <li><Link to={"/"} className="hover:text-gray-400 font-semibold">Home</Link></li>
              <li><Link to={"/profile"} className="hover:text-gray-400 font-semibold">profile</Link></li>
              <li><Link to={"/send"} className="hover:text-gray-400 font-semibold">send</Link></li>
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
              <Link to={"https://www.linkedin.com/in/manjeet-kumar4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="hover:text-gray-400">
                <i className="fab fa-facebook-f"></i> LinkedIn
              </Link>
              <Link to={"https://github.com/Manjeetmathur"} className="hover:text-gray-400">
                <i className="fab fa-instagram"></i> GitHub
              </Link>
              <Link to={"https://www.instagram.com/mathur__manjeet/"} className="hover:text-gray-400">
                <i className="fab fa-instagram"></i> Instagram
              </Link>
              <Link to={"https://www.facebook.com/people/Manjeet-M%C3%A4thur/pfbid02qRwQyDr2MeVJxU3eZ5sMgdtLBuwd3awzW9wUbKivKLfEU6dwW999xu7ckuLs4tALl/?name=xhp_nt_"} className="hover:text-gray-400">
                <i className="fab fa-instagram"></i> facebook
              </Link>
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
