import React from 'react'
import image from "../assets/category/macbook.png"
import { motion } from 'framer-motion'
import Button from './Button'

const Hero = () => {
  return (
    <div className='mt-20 mb-20'>
        <div className="overflow-hidden flex items-center justify-center rounded-3xl min-h-[550px] md:min-h-[650px] bg-gray-300">
            <div className='container pb-8 sm-pb-0'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex flex-col justify-center text-center'>
                        <h1
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className='text-7xl text-primary font-semibold'>
                            Unleash Infinite 
                        </h1>
                        <motion.p
                        data-aos="zoom-out"
                        data-aos-duration="500"
                        data-aos-once="true"
                        className='text-8xl tracking-wide '>
                            Possibilities
                        </motion.p>
                        <div>
                        <Button/>
                        </div>
                        
                    </div>
                    <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10">
                        <img
                        src={image}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero