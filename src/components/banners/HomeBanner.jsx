import React from "react";
import Img from "../../assets/images/tmp/big-image.png";

const HomeBanner = () => {
    return (
        <section className="flex flex-row justify-between">
            <div className="flex flex-col justify-start">
                <h1 className="text-5xl leading-tight">
                    Українська студентська асоціація UPSA
                </h1>
                <div className="text-2xl mt-6 mr-12">
                    <p>
                        Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs.
                    </p>
                </div>
            </div>
            <img src={Img} alt="placeholder" />
        </section>
    );
};

export default HomeBanner;
