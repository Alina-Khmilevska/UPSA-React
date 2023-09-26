// Menu.jsx
import React from "react";
import CloseIcon from "../../../../assets/images/icons/close.svg";
import "./Menu.css";

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
            <button className="absolute top-10 right-10" onClick={onClose}>
                <img
                    src={CloseIcon}
                    alt="Close Icon"
                    width={50}
                    height={50}
                />
            </button>

            <ul className="mt-40 mr-4 font-inter text-4xl font-light leading-loose">
                <li>Проекти</li>
                <li>Події</li>
                <li>Стати членом асоціації</li>
                <li>EPSA -Student Science ward</li>
                <li>Контакти</li>
                <li>Support Ukraine</li>
            </ul>

            <button className="upsa-bg-button rounded-md px-16">
                <a href="#">
                    Увійти як член управління
                </a>

            </button>
        </div>
    );
};

export default Menu;
