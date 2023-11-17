import React from "react";
import { useGetBlockQuery } from "../../redux/api/api.js";
import Banner from "./Banner.jsx";

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

  return (
    <Banner 
      title={data.title}
      body={data.body}
      link_url={data.link_url}
      link_title={data.link_title}
      image={data.image}
    />
  );
};

export default HomeBanner;
