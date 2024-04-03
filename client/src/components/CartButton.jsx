import React from 'react';

const CartButton = ({ addToCart, item_type, item_id, quantity }) => {
    const handleAddToCart = () => {
        addToCart( item_type, item_id, quantity); // Pass 'item_type' to addToCart
    };

    return (
        <button
            onClick={handleAddToCart}
            className="bg-gradient-to-t from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-medium border rounded py-3 px-4 mt-10 w-1/4 ml-5 cursor-pointer"
        >
            Add to Cart
        </button>
    );
};

export default CartButton;
