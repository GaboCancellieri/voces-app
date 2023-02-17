import React from "react";
import { AreasBanner, ProyectBanner } from "src/components/layout/Proyects";
import NavBar from "ccomponents/NavBar";
import styles from "styles/nonAdminScreens.module.scss";
import { Footer } from "ccomponents/index";

const Proyects = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />
      <ProyectBanner></ProyectBanner>
      <AreasBanner></AreasBanner>
      <Footer></Footer>
    </div>
  );
};

export default Proyects;
