import React from "react";
import Layout from "../components/shared/Layout";
import OurTeam from "../components/blocks/aboutUs/OurTeam";
import LocalRepresentatives from "../components/blocks/aboutUs/LocalRepresentatives";

const AboutUsPage = () => {
    return (
        <Layout>
            <OurTeam />
            <LocalRepresentatives />
        </Layout>
    );
};

export default AboutUsPage;
