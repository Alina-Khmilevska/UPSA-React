import React from "react";
import Slider from "react-slick";
import getFullImageUrl from "../../../utils/formatImageUrl";
import { Card } from "flowbite-react";
import ReadMoreButton from "../buttons/ReadMoreButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({ slidesToShow = 4, cardData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    // width 1926 in Figma, but I set it to 1608, just like the other blocks
    <div className="w-[1608px] mt-[132px]">
      <Slider {...settings}>
        {cardData.map((project) => (
          <div key={project.id} className="slider-card relative">
            <Card
              className="flex flex-col rounded-[68px] min-h-[600px] relative bg-mint shadow-none" // adjust min-h
              title={project.title}
              content={project.body}
            >
              <div className="w-full">
                <img
                  src={getFullImageUrl(project.image)}
                  alt={project.title}
                  className="w-[345px] h-[192px] rounded-[46px]" // adjust h and w
                />
              </div>
              {/* adjust min-h and min-w */}
              <div className="min-h-[200px] max-h-[200px]">
                <h5 className="text-[32px] leading-10 font-alexandria font-light tracking-tight text-black">
                  {project.title}
                </h5>
                <div
                  className="pt-[20px] font-normal text-black flex-grow overflow-hidden text-ellipsis font-['CenturyGothic'] text-base leading-5"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                  dangerouslySetInnerHTML={{ __html: project.body }}
                />
              </div>
              <ReadMoreButton text="Read More" link={`/news/${project.id}`} />
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
