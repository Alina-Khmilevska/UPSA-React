import React from "react";

const CloseIcon = ({ onClick }) => {
  return (
    <button className="absolute top-10 right-10" onClick={onClick}>
      <img
        src={CloseIcon}
        alt="Close Icon"
        width={50}
        height={50}
      />
    </button>
  );
};

export default CloseIcon;
