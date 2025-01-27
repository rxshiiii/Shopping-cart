import React from "react";
import logo from "../assets/360_F_332316530_ofa4oQA3ZGWxd4tRLDqKuADfy2hnpWuU.jpg";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

// Navigation Links Component
const NavLinks = () => (
  <div className="flex flex-row space-x-8 items-center">
    <Link
      to="/"
      className="text-white text-lg font-semibold hover:scale-110 transition-all duration-300 ease-in-out"
    >
      Home
    </Link>
    <Link
      to="/aboutus"
      className="text-white text-lg font-semibold hover:scale-110 transition-all duration-300 ease-in-out"
    >
      About Us
    </Link>
    <Link
      to="/contact"
      className="text-white text-lg font-semibold hover:scale-110 transition-all duration-300 ease-in-out"
    >
      Contact
    </Link>
  </div>
);

// Login & Sign-Up Buttons Component
const AuthButtons = () => (
  <div className="flex items-center space-x-4">
    <Link
      to="/login"
      className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md"
    >
      Login
    </Link>
    <Link
      to="/signup"
      className="px-4 py-2 bg-white text-blue-500 font-semibold rounded-full transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md"
    >
      Sign Up
    </Link>
  </div>
);

// Navbar Component
const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [animateBadge, setAnimateBadge] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setAnimateBadge(true);
      const timeout = setTimeout(() => setAnimateBadge(false), 300); // Reset animation
      return () => clearTimeout(timeout);
    }
  }, [cart.length]); // Re-run when cart length changes

  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-600 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            loading="lazy"
            className=" rounded-lg transition-transform transform hover:scale-105 w-[120px] h-[60px] duration-300 ease-in-out"
          />
        </Link>
  
        {/* Navigation Links */}
        <NavLinks />
  
        {/* Cart & Auth Buttons */}
        <div className="flex items-center space-x-6">
          <Link
            to="/cart"
            className="relative text-white text-xl hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <FaCartShopping />
            {/* Cart Icon Badge */}
            {cart.length > 0 && (
              <span
                className={`absolute top-[-10px] right-[-8px] bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transition-transform duration-300 ${
                  animateBadge ? "scale-110" : "scale-100"
                }`}
              >
                {cart.length}
              </span>
            )}
          </Link>
  
          {/* Login and Sign-Up Buttons */}
          <AuthButtons />
        </div>
      </div>
    </div>
  );
  
  
};

export default Navbar;
