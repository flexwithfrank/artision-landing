import React from "react";
import FooterV2 from "./FooterV2";
import CTAV2 from "./CTAV2";
import NavBarLightV2 from "./NavBarLightV2";
import TeamV2 from "./TeamV2";
import NavBarV4 from "./nav/navbarV4";

const TeamMembers = () => {
  return (
    <>
      <NavBarV4
        bgColor="#eee"
        color="#000"
        logo="https://ik.imagekit.io/dy6awnd3c/artesion_dark_website.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672685377583"
      />
      <TeamV2 />
      <CTAV2 />
      <FooterV2 />
    </>
  );
};

export default TeamMembers;
