import React from "react";
import Headline from "./headline";
import NavBarDarkV2 from "../NavBarDarkV2";
import Clients from "./clients";
import Description from "./description";
export default function Services() {
  return (
    <div class="min-h-full bg-gray-800">
      <NavBarDarkV2 navBgColor="#101827" />
      <Headline />
      <Clients />
      <Description />
    </div>
  );
}
