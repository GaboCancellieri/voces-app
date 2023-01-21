import React from "react";
import { AreasBanner, ProyectsBanner } from "src/components/layout/Proyects";
import NavBar from "ccomponents/NavBar";
const Proyects = () => {
  return (
    <>
      <NavBar />
      <ProyectsBanner></ProyectsBanner>
      <AreasBanner></AreasBanner>
    </>
  );
};

export default Proyects;
