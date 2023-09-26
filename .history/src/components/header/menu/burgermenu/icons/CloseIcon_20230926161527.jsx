import React from "react";
import Icon from "../../../../assets/images/icons/close.svg";

const CloseIcon = ({ onClick }) => {
  return (
    <button className="absolute top-10 right-10" onClick={onClick}>
      <img
        src={Icon}
        alt="Close Icon"
        width={50}
        height={50}
      />
    </button>
  );
};

export default CloseIcon;
