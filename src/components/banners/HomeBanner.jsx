import React from "react";
import Img from "../../assets/images/tmp/big-image.png";
import { Link } from "react-router-dom";

const HomeBanner = () => {
    return (
        <section className="flex flex-row justify-between">
            <div className="flex flex-col justify-between">
                <div>
                    <h1 className="text-5xl leading-tight">
                        Українська студентська асоціація UPSA
                    </h1>
                    <div className="text-2xl mt-6 mr-12">
                        <p>
                            Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs.
                        </p>
                    </div>
                </div>
                <div className="w-1/2">
                    <button className="upsa-bg-light-button rounded-md px-12 py-4 mt-10">
                        <Link to="#" className="font-light">
                            Дізнайся більше про UPSA та її команду
                        </Link>
                    </button>
                </div>
            </div>
            <img src={Img} alt="placeholder" width="800" height="600" />
        </section>
    );
};

export default HomeBanner;
