import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import LaptopCard from "./LaptopCard"
import { styles } from "../styles"
import SectionWrapper from "../hoc/SectionWrapper"
import Gallery from './Gallery'

const LaptopList = ({ laptopList }) => {
  return (
    <>

      <div className='w-full'>
        <Gallery/>
      </div>
     <SectionWrapper>
      <motion.div variants={textVariant}>
        <p className={`${styles.heroHeadText} text-secondary`}>Laptops</p>
        <h2 className={`${styles.sectionHeadText} text-primary`}>Overview</h2>
      </motion.div>

      

      <div className='mt-20 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {laptopList.map((laptop, index) => (
          <LaptopCard key={laptop.id} index={index} laptop={laptop} />
        ))}
      </div>
      
      
     </SectionWrapper>
    </>
  )
}

export default LaptopList