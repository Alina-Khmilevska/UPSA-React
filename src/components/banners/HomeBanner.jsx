import React from "react";
import ExternalButton from "../shared/buttons/ExternalButton";
import { useGetBlockQuery } from "../../redux/api/api.js";

const HomeBanner = () => {
  const { data, error, isLoading } = useGetBlockQuery({
    type: "showcase",
    endpoint: "homepage",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Creating a round element, which will be placed inside ExternalButton

  const roundElement = (
    <div className="mr-[14px] relative h-[58px] w-[58px] rounded-full overflow-hidden">
      {/* white circle*/}
      <div className="h-full w-full bg-white rounded-full flex justify-center relative">
        {/* Stripe inside the circle */}
        <div className="h-1 w-24 bg-lemon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
      </div>
    </div>
  );

  return (
    <section className="relative flex flex-row items-start w-[1607px] h-[651px] mt-[74px] text-mainText">
      <div className="flex flex-col relative z-10">
        <h1 className="w-[690px] h-[183px] mt-[40px] font-['alexandria'] text-[50px] leading-[61px]">
          {data.title}
        </h1>
        <div className="w-[700px]">
          <p
            dangerouslySetInnerHTML={{ __html: data.body }}
            className="text-[32px] font-['CenturyGothic'] mt-9 mr-11 leading-[40px]"
          />
        </div>
        <div className="flex w-[448px] h-[74px] mt-[112px] mr-[269px] bg-lemon font-['alexandria'] text-[26px] rounded-full items-center justify-end">
          <ExternalButton
            link={data.link_url}
            text={data.link_title}
            element={roundElement}
          />
        </div>
      </div>
      <div className="relative ml-11 mt-8">
        <img
          src={data.image}
          alt="UPSA-students"
          width="858"
          height="614"
          className="relative z-20 rounded-tl-[137px] rounded-br-[137px]"
        />

        {/* Green border */}
        <div className="absolute top-[-32px] left-[-32px] right-[32px] bottom-[64px] border-[10px] border-solid border-mint rounded-tl-[160px] z-0"></div>
      </div>
    </section>
  );
};

export default HomeBanner;
