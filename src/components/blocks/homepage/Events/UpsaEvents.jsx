import React from "react";
import Img from "../../../../assets/images/tmp/big-image.png";
import EventElement from "./EventElement";

const UpsaEvents = () => {
    const items = [
        { title: 'Вебінар на тему “Фармацевтична індустрія під час воєнного стану”', text: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs." },
        { title: 'UNMUTE - Podcast', text: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs." },
        { title: 'Small Talk Show', text: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs." },
    ];

    return (
        <section className="flex flex-row flex-wrap justify-between py-20 px-16">

            {items.slice(0, 3).map((item, index) => (
                <EventElement
                    key={index}
                    imgUrl={Img}
                    title={item.title}
                    body={item.text}
                    date="24.09.2023"
                    link="/"
                />
            ))}
        </section>
    );
};

export default UpsaEvents;
