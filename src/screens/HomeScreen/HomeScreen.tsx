import React from "react";
import { HomeBanner, HomeNews, HomeLeader } from "src/components/layout/Home";
import NavBar from "ccomponents/NavBar";
const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <HomeBanner></HomeBanner>
      <HomeNews></HomeNews>
      <HomeLeader></HomeLeader>
    </>
  );
};

export default HomeScreen;
