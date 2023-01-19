import React from "react";
import { AreasBanner, ProyectsBanner } from "src/components/layout/Proyects";
import { HomeBanner, HomeNews, HomeLeader } from "src/components/layout/Home";
import HomeStaff from "src/components/layout/Home/HomeStaff";
import { ActivitiesBanner } from "src/components/layout";
import Activities from "src/components/layout/Activities/ActivitesCards/Activities";
const HomeScreen = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <HomeNews></HomeNews>
      <HomeLeader></HomeLeader>
      <ProyectsBanner></ProyectsBanner>
      <AreasBanner></AreasBanner>
      <ActivitiesBanner></ActivitiesBanner>
      <Activities></Activities>
    </>
  );
};

export default HomeScreen;
