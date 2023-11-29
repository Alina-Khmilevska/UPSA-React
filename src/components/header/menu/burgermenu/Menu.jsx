// Menu.jsx
import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "./icons/CloseIcon";
import SocialIcons from "../../../shared/icons/SocialIcons";
import LanguageIcons from "../../../shared/icons/LanguageIcons";
import { useGetMenuQuery } from "../../../../redux/api/api.js";
import ExternalButton from "../../../shared/buttons/ExternalButton";

const Menu = ({ isOpen, onClose }) => {

    const { data } = useGetMenuQuery();

    const menuStyle = {
        width: isOpen ? "60%" : "0",
        right: isOpen ? "0" : "-50%",
        zIndex: isOpen ? "100" : "-1",
    };

    const backStyle = {
        width: isOpen ? "50%" : "0",
        right: isOpen ? "0" : "-50%",
        zIndex: isOpen ? "99" : "-3",
    };

    return (
        <div>
            <div
                className="bg-backgroundOpenMenu h-full fixed top-0 left-0 transition-all duration-500"
                style={backStyle}
            ></div>
            <div
                className="bg-white h-full text-mainText fixed top-0 right-0 transition-all duration-500 px-20 rounded-[82px]"
                style={menuStyle}
            >

                <CloseIcon onClick={onClose} />
                <ul className="mt-32 mr-4 text-menu leading-loose">
                    {data?.map((item, index) => (
                        <li key={index} className="flex flex-row align-middle">
                            <div className="mr-6 flex align-middle">
                                <img
                                    className=" object-contain"
                                    alt=""
                                    width={46}
                                    height={46}
                                    src={item.icon}
                                />
                            </div>

                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    ))}

                </ul>
                <div className="mt-[-120px] mb-10 ml-[-10px]">
                    <ExternalButton
                        link="http://crm-upsa-ua.com/user/login"
                        text='Log in as a member'
                    />
                </div>
                <LanguageIcons />
                <SocialIcons />
            </div>
        </div>
    );
};

export default Menu;
