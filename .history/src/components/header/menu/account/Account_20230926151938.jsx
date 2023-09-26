// Account.jsx
import React from "react";
import Icon from "../../../../assets/images/icons/account.svg";

const Account = ({ onClick }) => {
  return (
    <a className="cursor-pointer" href="#">
      <img
        src={Icon}
        alt="Burger Icon"
        width={70} 
        height={40}
      />
    </a>
  );
};

export default Account;
