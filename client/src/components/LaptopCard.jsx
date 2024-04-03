import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from "../utils/motion";
import CartButton from './CartButton';
import BuyButton from './BuyButton';
import { connect } from 'react-redux';
import { addToCart } from "../actions/cartActions";

const LaptopCard = ({ index, laptop, addToCart }) => {

    const baseUrl = 'http://localhost:8000';
    const fullImageUrl = baseUrl + laptop.image;
    const item_type = 'laptop'
    const [quantity, setQuantity] = useState(1); // State to manage quantity


  return (
    <div className="w-3/4 pl-10">
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className="rounded-t-lg shadow-card"
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Link to={`/laptop/${laptop.id}`}>
                    <img
                        src={fullImageUrl}
                        className="rounded-t-lg w-[400px] h-[300px]" // Set image width to full width and height to auto
                        alt="Laptop"
                    />
                </Link>
                <div
                    className="bg-secondary py-5 px-12 flex justify-evenly  flex-col"
                >

                    <h3 className="text-white text-[20px] font-bold">{laptop.name}</h3>
                    {/* <p className="text-white text-[20px] ">{laptop.description}</p> */}
                    <h3 className="text-white text-[20px] font-bold">KSH {laptop.price}</h3>
                    <div>
                        {/* <CartButton  addToCart={addToCart} item_type={item_type} item_id={laptop.id} quantity={quantity}  /> */}
                        <Link to={`/laptop/${laptop.id}`}>
                            <BuyButton />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
  )
}

export default connect(null, {addToCart})(LaptopCard);