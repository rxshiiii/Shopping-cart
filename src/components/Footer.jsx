import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-[100px] ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm text-gray-300">
            We are an online store offering a wide range of high-quality products at competitive prices. Customer satisfaction is our top priority.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: support@onlinestore.com</li>
            <li>Phone: +91 1234567890</li>
            <li>Address: 123, Main Street, Pune, India</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="/" className="hover:text-indigo-400">Home</a>
            </li>
            <li>
              <a href="/cart" className="hover:text-indigo-400">Cart</a>
            </li>
            <li>
              <a href="/aboutus" className="hover:text-indigo-400">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-indigo-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="Facebook"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
                alt="Twitter"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                alt="LinkedIn"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-[100px] text-sm text-gray-400">
        &copy; 2025 Online Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
