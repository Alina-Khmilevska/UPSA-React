import React from "react";
import { Link } from "react-router-dom";

const ExternalButton = ({ text, link }) => {
  return (
    <div className="flex mt-[140px] w-[448px] h-[74px] bg-lemon transition duration-300 hover:bg-mint font-['alexandria'] text-[26px] rounded-mainRadius items-center justify-end">
      <button className="flex items-center">
        <Link to={link} className="font-thin">
          {text}
        </Link>
        <div className="mr-[14px] ml-[40px] relative h-[58px] w-[58px] rounded-[36px] overflow-hidden">
          <div className="h-full w-full bg-white rounded-full flex justify-center relative">
            <div className="h-1 w-24 bg-lemon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default ExternalButton;
