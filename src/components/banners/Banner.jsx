import React from "react";
import ExternalButton from "../shared/buttons/ExternalButton";

const Banner = ({
    title,
    body,
    link_url,
    link_title,
    image,
}) => {
    return (
        <section className="flex flex-row items-start justify-between mt-[70px] text-mainText">
            <div className="flex flex-col w-[40%]">
                <h1 className="mt-[40px] font-['alexandria'] text-[50px] leading-[60px]">
                    {title}
                </h1>
                <p
                    dangerouslySetInnerHTML={{ __html: body }}
                    className="text-[32px] font-['CenturyGothic'] mt-9 mr-11 mb-18 leading-[40px]"
                />
                {link_url && link_title &&
                    <ExternalButton
                        link={link_url}
                        text={link_title}
                    />
                }
            </div>
            <div className="relative ml-11 mt-6">
                <img
                    src={image}
                    alt="UPSA-students"
                    width="858"
                    height="614"
                    className="relative z-20 rounded-tl-[137px] rounded-br-[137px]"
                />
                <div className="absolute top-[-32px] left-[-32px] right-[32px] bottom-[64px] border-[10px] border-solid border-mint rounded-tl-[160px] z-0"></div>
            </div>
        </section>
    );
};

export default Banner;
