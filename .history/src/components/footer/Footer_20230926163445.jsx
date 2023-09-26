import React from "react";
import LanguageIcons from "../shared/icons/LanguageIcons";
import SocialIcons from "../shared/icons/SocialIcons";

const Footer = () => {
    return (
        <footer className="upsa-bg-grey text-white py-4">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-start">
                    <LanguageIcons />

                    <p className="text-sm">
                        &copy;{new Date().getFullYear()} Ukrainian Pharmaceutical Students Assocciation
                    </p>
                </div>
                <div className="flex flex-col ">
                    <p className="text-sm">
                    Слідкуйте за нами у соціальних мережах:
                    </p>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
