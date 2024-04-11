import React from 'react'
import { Link } from 'react-router-dom';


const ProductCard = ({ data }) => {
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {data.map((item) => (
          <div
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
            className="group"
            key={item.id}
          >
            <div className="relative">
              <img
                src={item.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* Hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
                <Link to={item.path} className='text-primary font-bold'>{item.title}</Link>
              </div>
            </div>
            <div className="leading-7">
              <h2 className="font-semibold text-primary mt-3">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProductCard