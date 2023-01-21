import React from "react";
import { Activities, ActivitiesBanner } from "src/components/layout/Activities";
import NavBar from "ccomponents/NavBar";
const ActivitieScreen = () => {
  return (
    <>
      <NavBar />
      <ActivitiesBanner></ActivitiesBanner>
      <Activities></Activities>
    </>
  );
};

export default ActivitieScreen;
