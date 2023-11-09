import React from "react";
import Slider from "react-slick";
import Card from "../cards/Card";

const PartnerSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const cardData = [
    { imageSrc: "/partnerlogo1.jpg" },
    { imageSrc: "/partnerlogo2.jpg" },
    { imageSrc: "/partnerlogo3.jpg" },
    { imageSrc: "/partnerlogo4.jpg" },
    { imageSrc: "/partnerlogo5.jpg" },
  ];

  return (
    <div className="mt-40">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <Card key={index} content={card.imageSrc} imageSrc={card.imageSrc} /> // content={card.imageSrc} was added into <Card> only for testing if the Slider works correctly, and will be removed after replacing data in const cardData
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSlider;
