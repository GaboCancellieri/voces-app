import React from "react";
import { HomeBanner, HomeNews, HomeLeader } from "src/components/layout/Home";
import NavBar from "ccomponents/NavBar";
import styles from "styles/nonAdminScreens.module.scss";

const HomeScreen = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />
      <HomeBanner></HomeBanner>
      <HomeNews></HomeNews>
      <HomeLeader></HomeLeader>
    </div>
  );
};

export default HomeScreen;
