import React from "react";
import {
  ActivitiesCards,
  ActivitiesBanner,
} from "src/components/layout/Activities";
import NavBar from "ccomponents/NavBar";
import styles from "styles/nonAdminScreens.module.scss";
import { Footer } from "ccomponents/index";
const ActivitieScreen = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />
      <ActivitiesBanner></ActivitiesBanner>
      <ActivitiesCards></ActivitiesCards>
      <Footer></Footer>
    </div>
  );
};

export default ActivitieScreen;
