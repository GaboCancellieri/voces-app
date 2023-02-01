import React from "react";
import { Activities, ActivitiesBanner } from "src/components/layout/Activities";
import NavBar from "ccomponents/NavBar";
import styles from "styles/nonAdminScreens.module.scss";
import { Footer } from "ccomponents/index";
const ActivitieScreen = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />
      <ActivitiesBanner></ActivitiesBanner>
      <Activities></Activities>
      <Footer></Footer>
    </div>
  );
};

export default ActivitieScreen;
