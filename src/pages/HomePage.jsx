// HomePage.jsx
import React from "react";
import Layout from "../components/shared/Layout";
import HomeBanner from "../components/banners/HomeBanner";
import Number from "../components/blocks/homepage/Number";
import OurProjects from "../components/blocks/homepage/OurProjects";
import UpsaEvents from "../components/blocks/homepage/Events/UpsaEvents";
import TitleBlock from "../components/shared/titles/TitleBlock";
import MembershipForm from "../components/shared/forms/MembershipForm";
import CardSlider from "../components/shared/sliders/CardSlider";
import DataFetcher from "../examples/api/DataFetcher";
import ButtonExample from "../examples/flowbite/ButtonExample";

const HomePage = () => {
  return (
    <Layout>
      <HomeBanner />
      <Number />
      <TitleBlock title="Наші проекти" />
      <OurProjects />
      <TitleBlock title="UPSA - заходи" />
      <UpsaEvents />
      <MembershipForm />
      <CardSlider />
      <DataFetcher />
      <ButtonExample />
    </Layout>
  );
};

export default HomePage;
