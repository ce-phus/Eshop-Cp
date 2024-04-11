import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, getTotalPrice, addToCart } from '../actions/cartActions'; // Import the addToCart action
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.cartItems || []);
  const totalPrice = useSelector(state => state.cartReducer.totalPrice || 0);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [dispatch]);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleAddQuantity = (item) => {
    dispatch(addToCart(item.type, item.id, item.quantity + 1)); // Use the addToCart action to add 1 to the quantity
  };

  const baseUrl = 'http://localhost:8000';

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-semibold mt-6 mb-4 text-primary">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-secondary">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((cartItem, index) => (
            <div key={index}>
              {cartItem.cart_items && Object.keys(cartItem.cart_items).map((type, subIndex) => (
                cartItem.cart_items[type].map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center border-b border-gray-200 py-4">
                    <div className="flex items-center">
                      {item.image && (
                        <img src={`${baseUrl}${item.image}`} alt={item.name} className="w-[400px] h-[400px] mr-4" />
                      )}
                      <div>
                        <h2 className="text-lg font-bold text-primary">{item.name}</h2>
                        <p className="text-sm text-primary">Price: Ksh {item.price}</p>
                        <p className="text-sm text-gray-500">Description: {item.description}</p>
                        <div>
                          <button
                            className="text-sm text-blue-500 mr-2"
                            onClick={() => handleAddQuantity(item)}
                          >
                            + Add Quantity
                          </button>
                          <span className='text-primary'>Quantity: {item.quantity}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className="text-sm text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))
              ))}
            </div>
          ))}
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-secondary">Total Price: Ksh {totalPrice.toFixed(2)}</h2>
          </div>
          <Link to="#">
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
