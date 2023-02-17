import React from "react";
import NavBar from "ccomponents/NavBar";
import styles from "styles/nonAdminScreens.module.scss";

import Footer from "ccomponents/Footer";

const GalleryScreen = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />

      <Footer></Footer>
    </div>
  );
};

export default GalleryScreen;
