import React from "react";
import { AreasBanner, ProyectsBanner } from "src/components/layout/Proyects";
import NavBar from "ccomponents/NavBar";
import styles from "styles/nonAdminScreens.module.scss";
import { Footer } from "ccomponents/index";

const Proyects = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />
      <ProyectsBanner></ProyectsBanner>
      <AreasBanner></AreasBanner>
      <Footer></Footer>
    </div>
  );
};

export default Proyects;
