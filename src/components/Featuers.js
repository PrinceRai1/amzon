import React,{ useState } from "react";
import shade from "../assets/shade.png";
import ReactCompareImage from "react-compare-image";
import Before from "../assets/before.png";
import After from "../assets/after.png";
import { ProductsData } from "../data/products";
import Plane from "../assets/plane.png";

const Featuers = () => {

  const [menuProducts,setmenuProducts] = useState(ProductsData);
  const filters = (type) => {
    setmenuProducts(menuProducts.filter((products) => products.type===type))
  }

  return (
    <div className="my-12 text-[#343434] w-screen content-center">
      <section className="lg:flex block lg:justify-between items-center content-center mx-24 gap-8 lg:gap-32">
        <div className="text-xl lg:w-[35%] text-[#343434] mx-auto leading-loose">
          <h3 className="md:text-3xl sm:text-lg font-bold my-6">VIRTUAL TRY-ON</h3>
          <p className="text-lg md:text-2xl sm:text-base font-normal tracking-wide">
            NEVER BUY THE WRONG SHADE AGAIN.Shop on Amazon
          </p>
          <h3 className="text-xl md:text-3xl sm:text-lg font-bold text-[#343434] mt-6">Try Now!</h3>
          <img src={shade} alt="" width={250} />
        </div>
        <div className="w-[300px] md:w-[80%] lg:w-[600px]">
          <ReactCompareImage leftImage={Before} rightImage={After} />;
        </div>
      </section>

      <section>
        <img src={Plane} alt="plane" width={150} className="ml-[32%] hidden lg:block" />
        <h2 className="text-center text-xl md:text-3xl sm:text-lg font-bold text-[#343434] mt-6 mb-10">Our Feature Products</h2>
        <div className="md:flex justify-evenly items-center">
          <ul className="leading-[3rem] flex flex-row md:flex-col font-semibold text-base gap-2 md:text-lg lg:mx-12 mx-6 justify-evenly  cursor-pointer transition-all">
            <li className="hover:text-[#FE956F]" onClick={()=>setmenuProducts(ProductsData)} >All</li>
            <li className="hover:text-[#FE956F]" onClick={()=> filters('skin care')}>Skin Care</li>
            <li className="hover:text-[#FE956F]" onClick={()=> filters( 'conditioner')}>Conditioners</li>
            <li className="hover:text-[#FE956F]" onClick={()=> filters('foundation')}>Foundation</li>
          </ul>
          <div className="mx-4 flex flex-wrap mt-8 lg:mt-20 border-[#F8E367] rounded-3xl h-96 overflow-y-auto w-full lg:w-[75%] float-right">
            {menuProducts.map((products) => (
              <div>
                <div className="border bg-white border-white overflow-hidden rounded-xl gap-7 relative p-4 m-5 flex justify-between w-fit h-fit md:w-52 md:h-52 z-10">
                  <div className="flex flex-col gap-2">
                    <h3 className="md:text-2xl sm:text-lg font-semibold">{products.name}</h3>
                    <p className="font-base md:text-base sm:text-xs text-[#343434]">
                      {products.details || products.detail}
                    </p>
                    <h2 className="md:text-2xl sm:text-lg font-semibold">
                      {products.price}$
                    </h2>
                    <button className="border-2 max-w-fit border-slate-950 sm:text-xs md:text-sm rounded-2xl py-2 px-1">
                      Buy Now
                    </button>
                  </div>
                  <div className="z-10 absolute left-36 top-24 -rotate-12">
                    <img src={products.img} alt="Products img" className="md:inline md:w-20 hidden" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featuers;
