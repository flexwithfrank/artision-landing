import React from "react";
import Headline from "./headline";
import Clients from "./clients";
import Description from "./description";
import SectionA from "./sectionA";
import SectionB from "./sectionB";
import Process from "./process";
import RecommendedApproach from "./recommendedApproach";
import FooterV2 from "../FooterV2";
import ChooseUs from "./chooseUs";
import ContactForm from "./contactForm";
import NavBarV4 from "../nav/navbarV4";
export default function Services() {
  return (
    <div class="bg-gray-800 relative">
      <NavBarV4
      bgColor='#101827'
      color="#FFF"
      logo="https://ik.imagekit.io/dy6awnd3c/artesion-logo-website-V2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1673416133437"
      />
      <Headline />
      <Clients />
      <Description />
      <SectionA />
      <SectionB />
      <ChooseUs />
      <Process />
      <RecommendedApproach />
     <ContactForm />
      <FooterV2 />
    </div>
  );
}
