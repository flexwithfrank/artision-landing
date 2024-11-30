import React from "react";
import Headline from "./headline";
import NavBarDarkV2 from "../NavBarDarkV2";
import Clients from "./clients";
import Description from "./description";
import SectionA from "./sectionA";
import SectionB from "./sectionB";
import Process from "./process";
import RecommendedApproach from "./recommendedApproach";
import BrandFooter from "./brandFooter";
import CtaBanner from "./ctaBanner";
import FooterV2 from "../FooterV2";
import ChooseUs from "./chooseUs";
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
      <CtaBanner />
      <FooterV2 />
    </div>
  );
}
