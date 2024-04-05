import React from 'react'
import SectionWrapper from '../hoc/SectionWrapper'
import img from "../assets/products/TFT1.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { ProductCard, Heading } from '../components';


import Img1 from "../assets/products/tft.jpg"
import Img2 from "../assets/products/accessories.jpg"
import Img3 from "../assets/products/computerparts.jpg"
import Img4 from "../assets/products/GamingPc.jpg"
import Img5 from "../assets/products/GamingPC1.jpg"
import Img6 from "../assets/products/laptop.jpg"
import Img7 from "../assets/products/graphics.jpg"
import Footer from '../components/Footer';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Gaming Monitors/TFTs",
    path: "/pc",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Accessories",
    path: "/laptop",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Computer Parts",
    path: "/laptop",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Gaming Pc's",
    path: "/pc",
    aosDelay: "600",
  },
];
const ProductsData2 = [
  {
    id: 1,
    img: Img5,
    title: "PCs",
    path: "/pc",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img6,
    title: "Laptops",
    path: "/laptop",
    price: "420",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img7,
    title: "Graphics Card",
    link: "/laptop",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img5,
    title: "Gaming Pc's",
    path: "/pc",
    aosDelay: "600",
  },
];

const Product = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className='flex items-center justify-center mt-20 flex-col'>
      <div className='overflow-hidden rounded-3xl mb-5'>
        <img
        src={img}
        className='w-full h-[900px]'/>
      </div>
      <div>
      <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
      <Footer/>
    </div>
    
  )
}

export default Product