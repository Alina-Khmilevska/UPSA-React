import React from 'react';
import Slider from "react-slick";
import getFullImageUrl from '../../../utils/formatImageUrl';
import { Card } from 'flowbite-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({ slidesToShow = 4, cardData }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div>
            <Slider {...settings}>
                {cardData.map((project) => (
                    <div className="slider-card">
                        <Card
                            className="flex flex-col h-full"
                            title={project.title} content={project.body} >
                            <div className="w-full">
                                <img
                                    src={getFullImageUrl(project.image)}
                                    alt={project.title}
                                    style={{
                                        width: '526px',
                                        height: '340px',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {project.title}
                            </h5>
                            <div
                                className="font-normal text-gray-700 dark:text-gray-400 flex-grow overflow-hidden text-ellipsis"
                                style={{
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                }}
                                dangerouslySetInnerHTML={{ __html: project.body }}
                            />
                        </Card>
                    </div>

                ))}
            </Slider>
        </div>
    );
};

export default CardSlider;
