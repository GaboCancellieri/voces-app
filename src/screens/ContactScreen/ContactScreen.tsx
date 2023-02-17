import React from "react";
import NavBar from "ccomponents/NavBar";
import styles from "styles/nonAdminScreens.module.scss";
import Footer from "ccomponents/Footer";
import { Contact } from "src/components/layout";

const ContactScreen = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />

      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
};

export default ContactScreen;
