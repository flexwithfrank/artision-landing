import React from 'react';
import Team from './Team';
import FooterV2 from './FooterV2';
import CTAV2 from "./CTAV2";
import NavBarLightV2 from './NavBarLightV2';
import TeamModal from './TeamModal';

const TeamMembers = () => {
  return (
    <>
    <NavBarLightV2
    color="#eeeeee" />
    <Team />
    <CTAV2 />
    <FooterV2 />
    </>
  )
}

export default TeamMembers