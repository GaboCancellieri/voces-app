import { Footer } from "ccomponents/index";
import NavBar from "ccomponents/NavBar";
import React from "react";
import { StreamingBanner, StreamingShows } from "src/components/layout";
import styles from "styles/nonAdminScreens.module.scss";

const StreamingScreen = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />
      <StreamingBanner />
      <StreamingShows />

      <Footer />
    </div>
  );
};

export default StreamingScreen;
