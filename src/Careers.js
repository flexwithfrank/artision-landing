import React from "react";
import FooterV2 from "./FooterV2";
import CareersContent from "./CareersContent";
import NavBarV4 from "./nav/navbarV4";
const Careers = () => {
  return (
    <>
      <NavBarV4
        bgColor="#eee"
        color="#000"
        logo="https://ik.imagekit.io/dy6awnd3c/artesion_dark_website.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672685377583"
      />
      <CareersContent />
      <FooterV2 />
    </>
  );
};

export default Careers;
