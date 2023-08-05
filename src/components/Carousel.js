import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SliderProducts } from "../data/products";

const Carousel = () => {
  return (
    <Swiper
      className="container cursor-pointer"
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={3}
      navigation={false}
      loop={true}
      grabCursor={true}
      breakpoints={{
        200: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        340: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}>

      {SliderProducts.map((products) => (
        <SwiperSlide className="flex justify-center ">
          <div className="border bg-white border-white overflow-hidden rounded-xl p-4 m-11 flex justify-between w-full h-fit z-10">
            <div className="flex flex-col gap-4">
              <h3 className="md:text-2xl sm:text-lg font-semibold"> {products.name} </h3>
              <p className="font-base sm:text-xs md:text-sm">
                {products.details || products.detail}
              </p>
              <h2 className="md:text-3xl sm:text-lg font-bold"> {products.price}$ </h2>
              <button className="border-2 border-slate-950 font-medium sm:text-xs md:text-sm rounded-2xl py-2 px-1 w-20">
                Buy Now
              </button>
            </div>
            <div className="z-10 -rotate-[20deg] float-right relative top-16">
              <img src={products.img} alt="" className="w-52 h-60"/>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
