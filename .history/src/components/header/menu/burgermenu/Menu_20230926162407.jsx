// Menu.jsx
import React from "react";
import Ellipse from "../../../../assets/images/icons/tmp/ellipse.svg";
import CloseIcon from "./icons/CloseIcon";
import SocialIcons from "../../../shared/icons/SocialIcons";
import "./Menu.css";
import LanguageIcons from "../../../shared/icons/LanguageIcons";

const Menu = ({ isOpen, onClose }) => {
    const menuStyle = {
        width: isOpen ? "50%" : "0",
        right: isOpen ? "0" : "-50%",
    };

    return (
        <div
            className="upsa-bg-grey h-full text-white fixed top-0 right-0 transition-all duration-300 ease-in-out px-20"
            style={menuStyle}
        >
            <CloseIcon onClick={onClose} />
            <ul className="mt-32 mr-4 text-4xl font-light leading-loose">
                <li>Проекти</li>
                <li>Події</li>
                <li>Стати членом асоціації</li>
                <li>EPSA -Student Science ward</li>
                <li>Контакти</li>
                <li>Support Ukraine</li>
            </ul>

            <button className="upsa-bg-button rounded-md px-12 py-1 mt-10">
                <a href="#" className="font-light">
                    Увійти як член управління
                </a>
            </button>
            <SocialIcons />


            <div className="flex flex-row justify-between mt-14">
                <a href="mailto:upsa@gmail.com" className="font-light">
                    upsa@gmail.com
                </a>
                <LanguageIcons />
            </div>
        </div>
    );
};

export default Menu;
