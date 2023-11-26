import React from "react";
import LanguageToggle from "../shared/icons/LanguageIcons";
import SocialIcons from "../shared/icons/SocialIcons";

const Footer = () => {
    return (
        <footer className="bg-bottomBackground py-10 text-black px-12">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col justify-start">
                    <LanguageToggle />
                    <p className="text-sm mt-6">
                        &copy;{new Date().getFullYear()} Ukrainian Pharmaceutical Students Assocciation
                    </p>
                </div>
                <div className="flex flex-col justify-start">
                    <p className="text-darkGreen text-body font-normal leading-normal font-century-gothic">
                    Follolw us on social media
                    </p>
                        <SocialIcons />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
