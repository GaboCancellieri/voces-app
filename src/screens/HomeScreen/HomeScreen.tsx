import React from "react";
import { AreasBanner, ProyectsBanner } from "src/components/layout/Proyects";
import { HomeBanner, HomeNews, HomeLeader } from "src/components/layout/Home";
import HomeStaff from "src/components/layout/Home/HomeStaff";
const HomeScreen = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <HomeNews></HomeNews>
      <HomeLeader></HomeLeader>
      <ProyectsBanner></ProyectsBanner>
      <AreasBanner></AreasBanner>
    </>
  );
};

export default HomeScreen;
