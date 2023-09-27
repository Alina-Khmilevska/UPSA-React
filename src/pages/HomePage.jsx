// HomePage.jsx
import React from "react";
import Layout from "../components/shared/Layout";
import HomeBanner from "../components/banners/HomeBanner";
import Number from "../components/blocks/homepage/Number";
import OurProjects from "../components/blocks/homepage/OurProjects";

const HomePage = () => {
  return (
    <Layout>
      <HomeBanner />
      <Number />
      <OurProjects />
    </Layout>
  );
};

export default HomePage;
