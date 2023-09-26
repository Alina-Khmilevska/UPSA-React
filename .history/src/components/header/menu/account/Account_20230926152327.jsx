// Account.jsx
import React from "react";
import Icon from "../../../../assets/images/icons/account.svg";

const Account = ({ onClick }) => {
  return (
    <div className="mr-10">
    <a className="cursor-pointer" href="#">
      <img
        src={Icon}
        alt="Account Icon"
        width={70} 
        height={56}
      />
    </a>
    </div>
  );
};

export default Account;
