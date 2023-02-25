import { Footer, Tabs } from "ccomponents/index";
import NavBar from "ccomponents/NavBar";
import React from "react";
import styles from "styles/nonAdminScreens.module.scss";
import screenStyles from "./userAccountScreen.module.scss";
import { UserAccountDetails, UserTickets } from "src/components/layout";

export const USER_TABS = [
  {
    tabTitle: "Mi Cuenta",
    tabContent: <UserAccountDetails />,
  },
  {
    tabTitle: "Mis Entradas",
    tabContent: <UserTickets />,
  },
];

const UserAccountScreen = () => {
  return (
    <div className={styles.nonAdminScreen}>
      <NavBar />
      <div className={screenStyles.userTabsContainer}>
        <Tabs tabs={USER_TABS} />
      </div>
      <Footer />
    </div>
  );
};

export default UserAccountScreen;
