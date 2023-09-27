import React from "react";
import Img from "../../../assets/images/tmp/big-image.png";
import { Link } from "react-router-dom";

const OurProjects = () => {
    const items = [
        { title: 'Pharmbuddy - менторська программа', text: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs." },
        { title: 'UNMUTE - Podcast', text: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs." },
        { title: 'Small Talk Show', text: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs." },
        { title: '??????????????', text: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs." },
    ];

    return (
        <section className="flex flex-row flex-wrap justify-between py-20 px-16">
            {items.slice(0, 3).map((number, index) => (
                <div key={index} className="flex flex-col w-1/3">
                    <div key={index} className="mx-2 upsa-bg-block min-h-620">
                        <img src={Img} alt="" />
                        <div className="my-6 mx-8">
                            <h2 className="text-3xl mb-8">{number.title}</h2>
                            <p>{number.text}</p>
                        </div>

                    </div>
                </div>
            ))}
            <div className="flex flex-col w-1/3 mt-10">
                <div className="mt-8 upsa-bg-block min-h-620">
                    <img src={Img} alt="" />
                    <div className="my-6 mx-8">
                        <h2 className="text-3xl mb-8">{items[3].title}</h2>
                        <p>{items[3].text}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-2/3 mt-10 justify-center pl-20">
                <div className="mt-8 text-center w-1/2 ">
                    <Link to="/projects" className="mt-8 underline text-3xl mb-10">
                        Дивитися усі проекти
                    </Link>
                    <Link to="/projects">
                        <svg xmlns="http://www.w3.org/2000/svg" width="130" height="99" viewBox="0 0 130 99" fill="none" className="mx-auto mt-10">
                            <line x1="2.13168e-07" y1="48.5616" x2="129" y2="48.5617" stroke="black" stroke-width="4.87671" />
                            <line y1="-2.43836" x2="71.2995" y2="-2.43836" transform="matrix(0.748499 0.663135 -0.237825 0.971308 75.3721 5)" stroke="black" stroke-width="4.87671" />
                            <line y1="-2.43836" x2="71.2995" y2="-2.43836" transform="matrix(0.748499 -0.663135 -0.237825 -0.971308 75.3721 94)" stroke="black" stroke-width="4.87671" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default OurProjects;
