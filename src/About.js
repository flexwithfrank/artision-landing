import React from "react";
import AboutUsVideo from "./AboutUsVideo";
import WhoWeAreV2 from "./WhoWeAreV2";
import HeadlineTextSection from "./HeadlineTextSection";

import LearnMore from "./LearnMore";
import FooterV2 from "./FooterV2";
import NavBarV4 from "./nav/navbarV4";
import CTAV1 from "./CTAV1";

const About = () => {
  return (
    <div>
      <NavBarV4
        bgColor="#FFF"
        color="#000"
        logo="https://ik.imagekit.io/dy6awnd3c/artesion_dark_website.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672685377583"
      />
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
