import React from "react";
import Slider from "react-slick";
import { useGetPartnersQuery } from '../../../redux/api/api.js';
import getFullImageUrl from '../../../utils/formatImageUrl';

const PartnerSlider = () => {

  const { data, isLoading } = useGetPartnersQuery();

  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  if (isLoading) {
    return (
      <div>
        Loading ...
      </div>
    );
  }


  return (
    <div className="mt-40">
      <Slider {...settings}>
        {data.map((card, index) => (
          <a key={index} href={card.website_url} target="_blank" rel="noreferrer">
            <img key={index} src={getFullImageUrl(card.logo)} alt={card.title} className="w-40 h-40 mx-auto object-contain" />
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSlider;
