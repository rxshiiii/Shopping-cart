import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {cart.length > 0 ? (
        <div>
          {/* Cart Items List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 mt-[50px]">
            {cart.map((item) => (
              <CartItems item={item} key={item.id} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Your Cart</h2>
              <p className="text-lg text-gray-600 mt-2">Summary</p>
              <div className="mt-4 text-gray-700">
                <p className="text-sm">Total Items: {cart.length}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 border-t pt-4">
              <div className="text-xl font-semibold text-gray-800">Total Amount:</div>
              <div className="text-xl font-bold text-blue-600">${totalAmount.toFixed(2)}</div>
            </div>

            {/* Checkout Button */}
            <div className="mt-6 flex justify-end">
              <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out">
                Check out now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center h-[400px] flex items-center justify-center flex-col gap-y-4">
          <h2 className="text-4xl font-semibold text-blue-800">Cart is empty !</h2>
          <Link to="/">
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
