// HomePage.jsx
import React from "react";
import Layout from "../components/shared/Layout";
import HomeBanner from "../components/banners/HomeBanner";
import Statistic from "../components/blocks/homepage/Statistic";
import OurProjects from "../components/blocks/homepage/OurProjects";
import UpsaEvents from "../components/blocks/homepage/Events/UpsaEvents";
import TitleBlock from "../components/shared/titles/TitleBlock";
import MembershipForm from "../components/shared/forms/MembershipForm";
import ButtonExample from "../examples/flowbite/ButtonExample";
import News from "../components/blocks/homepage/News/News";
import PartnerSliders from "../components/shared/sliders/PartnersSlider";
import TopProjects from "../components/blocks/homepage/TopProjects";

const HomePage = () => {
  return (
    <Layout>
      <HomeBanner />
      <Statistic />
      <TitleBlock title="ur Projects" isLogo={true} />
      <OurProjects />
      <TitleBlock title="UPSA - Events" />
      <UpsaEvents />
      <TopProjects />
      <MembershipForm />
      <ButtonExample />
      <News />
      <TitleBlock title="ur Partners" isLogo={true} />
      <PartnerSliders />
    </Layout>
  );
};

export default HomePage;
