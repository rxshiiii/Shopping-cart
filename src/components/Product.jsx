import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/CartSlice";

const Product = ({ post }) => {
    const description = `${post.description.substring(0, 70)}...`; // Truncate description
    const title = `${post.title.substring(0, 20)}...`; // Truncate title
    
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to the cart");
    };

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from cart");
    };

    const isInCart = cart.some((p) => p.id === post.id);

    return (
        <div className="w-full sm:w-[270px] lg:w-[220px] xl:w-[250px] bg-white rounded-lg shadow-lg p-[20px] flex flex-col justify-around transition-all transform hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] ease-in-out h-[420px] space-y-4 mb-[70px] pb-8">
            {/* Title */}
            <div className="flex justify-center items-center mb-2">
                <p className="text-xl font-semibold text-gray-800 truncate">{title}</p>
            </div>

            {/* Description */}
            <div className="flex-1 mb-2">
                <p className="text-sm text-gray-600">{description}</p>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center mb-4">
                <img
                    className="w-[140px] h-[140px] object-contain transition-all transform hover:scale-110 ease-in-out duration-[380ms]"
                    src={post.image || "/fallback-image.png"}
                    alt={post.title || "Product Image"}
                />
            </div>

            {/* Price */}
            <div className="flex justify-center mb-4">
                <p className="text-lg font-bold text-gray-700">{`$${post.price}`}</p>
            </div>

            {/* Add/Remove Button */}
            <div className="flex justify-center">
                {isInCart ? (
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
                        onClick={removeFromCart}
                    >
                        Remove Item
                    </button>
                ) : (
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-all flex justify-center items-center"
                        onClick={addToCart}
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default Product;
