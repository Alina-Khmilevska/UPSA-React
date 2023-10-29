// HomePage.jsx
import React from "react";
import Layout from "../components/shared/Layout";
import HomeBanner from "../components/banners/HomeBanner";
import Number from "../components/blocks/homepage/Number";
import OurProjects from "../components/blocks/homepage/OurProjects";
import UpsaEvents from "../components/blocks/homepage/Events/UpsaEvents";
import TitleBlock from "../components/titles/TitleBlock";

const HomePage = () => {
  return (
    <Layout>
      <HomeBanner />
      <Number />
      <TitleBlock title="Наші проекти" />
      <OurProjects />
      <TitleBlock title="UPSA - заходи" />
      <UpsaEvents />
    </Layout>
  );
};

export default HomePage;
