import React from "react";
import AboutUsVideo from "./AboutUsVideo";
import HeroSectionV2 from "./HeadlineSectionV2";
import WhoWeAreV2 from "./WhoWeAreV2";
import PartnerLogos from "./PartnerLogos";
import HeadlineTextSection from "./HeadlineTextSection";
import Mission from "./Mission";
import AboutUs from "./AboutUs";
import LearnMore from "./LearnMore";
import RecentProjects from "./RecentProjects";
import FooterV2 from "./FooterV2";
import NavBarLightV2 from "./NavBarLightV2";
import CTAV1 from "./CTAV1";

const About = () => {
  return (
    <div>
      <NavBarLightV2 />
      <AboutUsVideo />
      <HeadlineTextSection />
      <WhoWeAreV2 />
      <LearnMore />
      <CTAV1 />
      <FooterV2 />
    </div>
  );
};

export default About;
