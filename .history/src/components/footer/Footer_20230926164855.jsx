import React from "react";
import LanguageIcons from "../shared/icons/LanguageIcons";
import SocialIcons from "../shared/icons/SocialIcons";

const Footer = () => {
    return (
        <footer className="upsa-bg-grey text-white py-12 px-12">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-start">
                    <LanguageIcons />

                    <p className="text-sm mt-6">
                        &copy;{new Date().getFullYear()} Ukrainian Pharmaceutical Students Assocciation
                    </p>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-sm">
                        Слідкуйте за нами у соціальних мережах:
                    </p>
                    <div className="-mt-6">
                        <SocialIcons />
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;
