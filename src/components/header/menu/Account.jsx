import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../assets/images/icons/account.svg";

const Account = ({ onClick }) => {
  return (
    <div className="mr-10 ml-20">
    <Link to="/">
      <img
        src={Icon}
        alt="Account Icon"
        width={55} 
        height={55}
      />
    </Link>
    </div>
  );
};

export default Account;
