import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from "../utils/motion";
import BuyButton from './BuyButton';
import { connect } from 'react-redux';
import { addToCart } from "../actions/cartActions";

const PcCard = ({ index, pc, addToCart }) => {

    const baseUrl = 'http://localhost:8000';
    const fullImageUrl = baseUrl + pc.image;
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
                <Link to={`/pc/${pc.id}`}>
                    <img
                        src={fullImageUrl}
                        className="rounded-t-lg w-[400px] h-[300px]" 
                        alt="Laptop"
                    />
                </Link>
                <div
                    className="bg-secondary py-5 px-12 flex justify-evenly  flex-col"
                >

                    <h3 className="text-white text-[20px] font-bold">{pc.name}</h3>
                    <h3 className="text-white text-[20px] font-bold">KSH {pc.price}</h3>
                    <div>
                        <Link to={`/pc/${pc.id}`}>
                            <BuyButton />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
  )
}

export default connect(null, {addToCart})(PcCard);