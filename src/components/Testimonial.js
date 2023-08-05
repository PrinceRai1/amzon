import React from "react";
import mid from "../assets/testimonialHero.png";
import { TestimonialsData } from "../data/testimonials";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const Testimonial = () => {

  return (
    <>
      <section className="flex md:flex-row flex-col items-center md:justify-between lg:items-baseline mx-6 font-[Poppins]">
        <div className="">
          <h2 className="text-3xl md:text-left text-center md:text-4xl  mt-6 text-[#343434] font-extrabold leading-normal ">
            Top Rated
          </h2>
          <p className="text-sm font-medium my-3">
            SEEDLY SAY HAS SUITABLE DISPOSAL AND BOY <br /><span className="hidden md:inline">,EXERCISE JOY MAN CHILDERN
            REJOICED</span>
          </p>
        </div>

        <div className="my-4">
          <img src={mid} alt="" width={500} />
          <h2 className="text-4xl font-extrabold md:text-3xl sm:text-lg text-[#343434] text-center">
            Reviews
          </h2>
        </div>

        <div className="text-3xl md:text-right text-center md:text-4xl  mt-6 text-[#343434] font-extrabold leading-normal">
          <p>100k</p>
          <p className="md:text-right text-sm font-medium my-3">
            Happy Customers With Us
          </p>
        </div>
      </section>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination,Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation= {false}
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
        }}
      >
        {TestimonialsData.map((test) => (
          <SwiperSlide>
            <div className="relative md:w-[400px] md:h-[400px] w-full h-[50%] flex justify-center items-center p-4">
              <div className="border rounded-2xl bg-white px-6 pt-8 relative">
              <img
                src={test.image}
                alt="img"
                className="mx-auto"
              />
                <p className="text-center md:text-base sm:text-xs text-[#343434]">{test.comment}</p>
                <div className="mim-w-min h-[1px] bg-[#343434] m-2"></div>
                <h5 className="text-center md:text-base sm:text-sm m-2 font-semibold text-[#343434]">
                  {test.name}
                </h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial;
