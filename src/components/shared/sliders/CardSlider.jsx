import React from 'react';
import Slider from "react-slick";
import Card from '../cards/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    };

    const cardData = [
        {
            imageSrc: "/path/to/your/image1.jpg",
            title: "Pharmaceutical companies maintain reputation post-pandemic",
            content: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs."
        },
        {
            imageSrc: "/path/to/your/image1.jpg",
            title: "Pharmaceutical companies maintain reputation post-pandemic",
            content: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs."
        },
        {
            imageSrc: "/path/to/your/image1.jpg",
            title: "Pharmaceutical companies maintain reputation post-pandemic",
            content: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs."
        },
        {
            imageSrc: "/path/to/your/image1.jpg",
            title: "Pharmaceutical companies maintain reputation post-pandemic",
            content: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs."
        },
        {
            imageSrc: "/path/to/your/image1.jpg",
            title: "Pharmaceutical companies maintain reputation post-pandemic",
            content: "Opinions showed consistent recognition of the sector’s support for the NHS, with 67% of respondents saying the industry is committed to developing new medicines to meet patient needs."
        },
    ];

    return (
        <div>
            <Slider {...settings}>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        content={card.content}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default CardSlider;
