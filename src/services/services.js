import React from "react";
import Headline from "./headline";
import NavBarDarkV2 from "../NavBarDarkV2";
import Clients from "./clients";
import Description from "./description";
import SectionA from "./sectionA";
import SectionB from "./sectionB";
import Process from "./process";
import RecommendedApproach from "./recommendedApproach";
import FooterV2 from "../FooterV2";
import ChooseUs from "./chooseUs";
import ContactForm from "./contactForm";
export default function Services() {
  return (
    <div class="min-h-full bg-gray-800">
      <NavBarDarkV2 navBgColor="#101827" />
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
