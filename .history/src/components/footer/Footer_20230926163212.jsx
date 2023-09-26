import React from "react";
import LanguageIcons from "../shared/icons/LanguageIcons";
import SocialIcons from "../shared/icons/SocialIcons";

const Footer = () => {
    return (
        <footer className="upsa-bg-grey text-white py-4">
            <div className="flex-row justify-between items-center">
                <div className="flex flex-col justify-center items-center">
                    <LanguageIcons />

                    <p className="text-center text-sm">
                        &copy;{new Date().getFullYear()} Ukrainian Pharmaceutical Students Assocciation
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-center text-sm">
                        &copy;{new Date().getFullYear()} Ukrainian Pharmaceutical Students Assocciation
                    </p>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
