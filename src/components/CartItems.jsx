import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/slices/CartSlice";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full max-w-[300px]">
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-6 ">
        {/* Product Image */}
        <img
          src={item.image}
          alt="Item image"
          className="w-[150px] h-[150px] object-contain hover:scale-110 transition-all duration-300 ease-in-out"
        />

        {/* Product Details */}
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold text-gray-800 truncate max-h-12 overflow-hidden line-clamp-2 mt-5">
            {item.title.length > 25 ? `${item.title.substring(0, 20)}...` : item.title}
        </h2>
        <div className="mt-2 text-lg font-bold text-green-500 mr-[30px] mb-5">${item.price}</div>
        </div>


        {/* Remove Button */}
        <div>
        <div className=" mt-3 mr-[30px] cursor-pointer text-red-600 hover:text-red-900 transition-all duration-300 ease-in-out bg-red-200 w-12 h-12 rounded-full  flex justify-center items-center">
          <MdDelete className="text-2xl" onClick={removeHandler} />
        </div>
        </div>
      </div>

      {/* Add a border between the product info and the remove button */}
      <div className="mt-6 border-t pt-4">
        <div className="text-sm text-gray-500">Added to Cart</div>
      </div>
    </div>
  );
};

export default CartItems;
