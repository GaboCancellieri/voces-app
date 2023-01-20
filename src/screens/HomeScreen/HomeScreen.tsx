import React from "react";
import { AreasBanner, ProyectsBanner } from "src/components/layout/Proyects";
import { HomeBanner, HomeNews, HomeLeader } from "src/components/layout/Home";
import { ActivitiesBanner } from "src/components/layout";
import Activities from "src/components/layout/Activities/ActivitesCards/Activities";
import NavBar from "ccomponents/NavBar";
const HomeScreen = () => {
  return (
    <>
      <NavBar />
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
