import React, {useEffect, useState} from 'react'
import { Hero, Category, Category2, Services, Banner, Product, Blogs } from '../components'
import AOS from "aos";
import "aos/dist/aos.css";
import headphone from "../assets/hero/headphone.png"
import smartwatch2 from "../assets/category/smartwatch2-removebg-preview.png"
import Footer from '../components/Footer';

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
}

const Home = () => {

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
    <div className='bg-white ml-20'>
      <Hero  />
      <Category/>
      <Category2/>
      <Services/>
      <Banner data = {BannerData}/>
      <Product/>
      <Banner data= {BannerData2} />
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default Home