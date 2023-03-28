import React from "react";
import NavBar from "ccomponents/NavBar";
import styles from "styles/nonAdminScreens.module.scss";

import Footer from "ccomponents/Footer";
import { GalleryAlbums, GalleryBanner } from "src/components/layout/Gallery";

const GalleryScreen = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />
      <GalleryBanner></GalleryBanner>
      <GalleryAlbums></GalleryAlbums>
      <Footer></Footer>
    </div>
  );
};

export default GalleryScreen;
