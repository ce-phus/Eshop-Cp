import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "../utils/motion"
import PcCard from './PcCard'
import { styles } from "../styles"
import SectionWrapper from "../hoc/SectionWrapper"
import Gallery from './Gallery'

const PcList = ({ pcList }) => {
  return (
    <>

      <div className='w-full'>
        <Gallery/>
      </div>
     <SectionWrapper>
      <motion.div variants={textVariant}>
        <p className={`${styles.heroHeadText} text-secondary`}>Gaming Pc</p>
        <h2 className={` text-6xl text-secondary`}>Overview</h2>
      </motion.div>

      

      <div className='mt-20 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {pcList.map((pc, index) => (
          <PcCard key={pc.id} index={index} pc={pc} />
        ))}
      </div>
      
      
     </SectionWrapper>
    </>
  )
}

export default PcList