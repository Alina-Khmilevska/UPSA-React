import React from "react";
import Ellipse from "../../../../../assets/images/icons/tmp/ellipse.svg";

const LanguageIcons = () => {
    return (
        <div className="flex flex-row">
                    <div className="px-2">
                        <img src={Ellipse} alt="Ellipse" width={50} height={50} />
                    </div>
                    <img src={Ellipse} alt="Ellipse" width={50} height={50} />
                </div>
    );
};

export default LanguageIcons;
