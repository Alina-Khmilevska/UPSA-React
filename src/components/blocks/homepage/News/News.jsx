import React from "react";
import TitleBlock from "../../../shared/titles/TitleBlock";
import { useGetNewsQuery } from "../../../../redux/api/api.js";
import CardSlider from "../../../shared/sliders/CardSlider";
import LearnMoreButton from "../../../shared/buttons/LearnMoreButton.jsx";

const News = () => {
  const { data, isLoading, error } = useGetNewsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="py-10 mt-[255px]">
      <div className="container ml-10">
        <TitleBlock title="Latest news" />
        <CardSlider cardData={data} />
      </div>
      <div className="mt-[112px] flex items-center justify-center font-['CenturyGothic'] font-normal text-[36px] leading-11">
        <LearnMoreButton text="See all news" link={"/news"} />
      </div>
    </section>
  );
};

export default News;
