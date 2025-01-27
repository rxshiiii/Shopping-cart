import React, { useEffect, useState, useContext } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { UserContext } from "../components/UserContex";
import { Link } from "react-router-dom";

const Home = () => {
  const API = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const { user } = useContext(UserContext); // Access the user context for personalized message

  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API);
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.log("Error", error);
      setPost([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
      {/* Welcome Message */}
      <div className="mb-6 mt-[60px] text-center">
        {user ? (
          <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
            Welcome<span className="text-indigo-600 ml-1 hover:text-2xl transition-all duration-300 ease-in-out cursor-pointer">{user.name}</span>! 🎉
          </h1>
        ) : (
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700">
            Welcome to Our Store! Please{" "}
            <Link
              to="/signup"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Sign Up
            </Link>{" "}
            or{" "}
            <Link
              to="/login"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Log In
            </Link>{" "}
            to enjoy personalized features.
          </h1>
        )}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-x-4 mt-[70px]">
        {post.length > 0 ? (
          post.map((product) => <Product key={product.id} post={product} />)
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No Products Found
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
