import React from "react";
import { Link } from "react-router-dom";

const ReadMoreButton = ({ text, link }) => {
  return (
    <div className="relative flex">
      <button
        type="button" // adjust h and w
        className="relative -bottom-[28px] mt-[56px] ml-[20px] w-[236px] h-[50px] z-10
        bg-lemon transition duration-300 font-alexandria text-body 
        rounded-inputRadius hover:bg-mint hover:border-4 hover:border-lemon border-solid font-thin"
      >
        <Link target="_blank" to={link}>
          {text}
        </Link>
      </button>
      <Link target="_blank" to={link}>
        <div // adjust h and w
          className="absolute w-[50px] h-[50px] -bottom-[28px] -right-2
      bg-lemon transition duration-300 font-thin rounded-mainRadius text-sm p-3 
      text-center inline-flex items-end box-border outline-none ring-[16px] ring-white hover:bg-mint"
        >
          <svg
            className="w-8 h-8 transform -rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default ReadMoreButton;
