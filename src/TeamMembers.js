import React from 'react';
import Team from './Team';
import FooterV2 from './FooterV2';
import CTAV2 from "./CTAV2";
import NavBarLightV2 from './NavBarLightV2';
import TeamModal from './TeamModal';
import TeamV2 from './TeamV2';

const TeamMembers = () => {
  return (
    <>
    <NavBarLightV2
    color="#eeeeee" />
    <TeamV2 />
    <CTAV2 />
    <FooterV2 />
    </>
  )
}

export default TeamMembers