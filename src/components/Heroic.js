import React from "react";
import Hero from "../assets/hero.png";
import "../components/Heroic.css";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaBagShopping } from "react-icons/fa6";

const Heroic = () => {
  return (
    <section className="mx-6 w-screeninline-block lg:flex justify-between items-start font-[Poppins]">
      <div className="flex flex-row lg:flex-col justify-between lg:gap-28">
        <div className="text-xl md:text-3xl font-bold mt-10">
          <span>SKIN</span>
          <br/>
          <span>PROTECTION</span>
          <br/>
          <span>CREAM</span>
          <br/>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Trendy <br /> Collection
          </h2>
          <p className="font-medium md:text-base text-xs text-justify w-36 h-48 md:w-56">
            Seedily say has suitable disposal and boy.Exercise joy man children
            rejoiced
          </p>
        </div>
      </div>

      {/* IMAGE PART */}

      <div className="object-scale-down">
        <div className="shrink relative bg-gradient-to-b from-[#09bdff] via-[#e9e361] to-[#F8E367] rounded-full -z-20 bouncebg md:w-[36em] md:h-[36em] w-[20em] h-[20em]">
          <img src={Hero} alt="" className="-z-10 object-scale-down shrink place-content-center hero" />
        </div>
      
        <div className="lg:flex hidden">
          <div className="text-3xl p-3 mx-4 border-4 bg-white border-black rounded-full w-16 h-16 text-center hover:scale-125 transition-all ease-in">
            <FaBagShopping />
          </div>
          <div className="w-40 border rounded-lg bg-white h-14 flex p-2">
            <p className="w-36">Best Signup Offers</p>
            <span className="text-xl p-2 hover:scale-125 transition-all">
              <BsArrowRightCircle />
            </span>
          </div>
        </div>
      </div>
   
      <div className="flex flex-row lg:flex-col justify-between lg:gap-36">
        <div className="text-4xl text-right font-semibold text-zinc-900 mt-10">
          <p>1.5m </p>
          <p className="text-right text-sm font-medium">Monthly traffic</p>
        </div>

        <div className="text-4xl text-right font-semibold text-zinc-900 mt-10">
          <p>100k</p>
          <p className="text-right text-sm font-medium">Happy Customers</p>
        </div>
      </div>
    </section>
  );
};

export default Heroic;
