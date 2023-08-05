import React from "react";
import Logo from "../assets/logo.png";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";
import { GoSignIn, GoPeople } from "react-icons/go";
import { BiLink } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="border-t-white border-t-2 mb-28 relative font-[Poppins]">
      <div className="flex justify-evenly mt-10">
        <div>
          <img src={Logo} alt="" width={50} />
        </div>
        <div className="leading-normal">
          <h3
            className="text-center md:text-2xl text-[16px]
 font-semibold">
            Contacts Us
          </h3>
          <p>
            <HiOutlineLocationMarker className="relative top-6 mr-3 sm:text-sm md:text-xl" />
            <span
              className="mx-6 md:text-[10px]
 text-[8px]
 font-medium">
              120 North Delhi, India
            </span>
          </p>
          <p>
            <HiOutlinePhone className="relative top-6 mr-3 sm:text-sm md:text-xl" />
            <span
              className="mx-6 md:text-[10px]
 text-[8px]
 font-medium">
              +3345298510
            </span>
          </p>
          <p>
            <HiOutlineMail className="relative top-6 mr-3 sm:text-sm md:text-xl" />
            <span
              className="mx-6 md:text-[10px]
 text-[8px]
 font-medium">
              support@mail.com
            </span>
          </p>
        </div>

        <div className="leading-normal">
          <h3
            className="text-center md:text-2xl  text-[16px]
 font-semibold">
            Accounts
          </h3>
          <p>
            <GoSignIn className="relative top-6 mr-3 sm:text-sm md:text-xl" />
            <span
              className="mx-6 md:text-[10px]
 text-[8px]
 font-medium">
              Sign in
            </span>
          </p>
        </div>

        <div className="leading-normal">
          <h3
            className="text-center md:text-2xl  text-[16px]
 font-semibold">
            Company
          </h3>
          <p>
            <GoPeople className="relative top-6 mr-3 sm:text-sm md:text-xl" />
            <span
              className="mx-6 md:text-[10px]
 text-[8px]
 font-medium">
              About Us
            </span>
          </p>
        </div>

        <div className="leading-normal">
          <h3
            className="text-center md:text-2xl  text-[16px]
 font-semibold">
            Resources
          </h3>
          <p>
            <BiLink className="relative top-6 mr-3 sm:text-sm md:text-xl" />
            <span
              className="mx-6 md:text-[10px]
 text-[8px]
 font-medium">
              Safety Privacy & Terms
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
