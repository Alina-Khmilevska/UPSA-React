// HomePage.jsx
import React from "react";
import Layout from "../components/shared/Layout";
import HomeBanner from "../components/banners/HomeBanner";
import NumberBlock from "../components/blocks/homepage/NumberBlock";

const HomePage = () => {
  return (
    <Layout>
      <HomeBanner />
      <NumberBlock />
    </Layout>
  );
};

export default HomePage;
