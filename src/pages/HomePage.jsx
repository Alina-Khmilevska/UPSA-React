// HomePage.jsx
import React from "react";
import Layout from "../components/shared/Layout";
import HomeBanner from "../components/banners/HomeBanner";
import Number from "../components/blocks/homepage/Number";
import OurProjects from "../components/blocks/homepage/OurProjects";
import UpsaEvents from "../components/blocks/homepage/Events/UpsaEvents";
import TitleBlock from "../components/shared/titles/TitleBlock";
import MembershipForm from "../components/shared/forms/MembershipForm";
import ButtonExample from "../examples/flowbite/ButtonExample";
import OurTeam from "../components/blocks/aboutUs/OurTeam";
import News from "../components/blocks/homepage/News/News";
import PartnerSliders from "../components/shared/sliders/PartnersSlider";

const HomePage = () => {
  return (
    <Layout>
      <HomeBanner />
      <Number />
      <TitleBlock title="Our Projects" />
      <OurProjects />
      <TitleBlock title="UPSA - Events" />
      <UpsaEvents />
      <MembershipForm />
      <ButtonExample />
      <OurTeam />
      <News />
      <TitleBlock title="Наші партнери" />
      <PartnerSliders />
    </Layout>
  );
};

export default HomePage;
