import React from "react";
import { HomeBanner, HomeNews, HomeLeader } from "src/components/layout/Home";
import NavBar from "ccomponents/NavBar";
import styles from "styles/nonAdminScreens.module.scss";
import HomeStaff from "src/components/layout/Home/HomeStaff";
import Footer from "ccomponents/Footer";

const HomeScreen = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />
      <HomeBanner></HomeBanner>
      <HomeNews></HomeNews>
      <HomeLeader></HomeLeader>
      <HomeStaff></HomeStaff>
      <Footer></Footer>
    </div>
  );
};

export default HomeScreen;
