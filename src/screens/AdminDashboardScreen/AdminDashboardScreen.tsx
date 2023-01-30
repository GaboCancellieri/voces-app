import React from "react";
import { COLOR_PRIMARY } from "constants/colors";
import screenStyles from "styles/adminScreens.module.scss";
import { AdminBar, Typography } from "ccomponents/index";

const AdminDashboardScreen = () => {
  return (
    <div className={screenStyles.adminScreenContainer}>
      <AdminBar />
      <div className={screenStyles.adminScreenContent}>
        <Typography
          fontFamily={"fjallaOne"}
          size={"50px"}
          color={COLOR_PRIMARY}
        >
          HOLA ADMIN!
        </Typography>
      </div>
    </div>
  );
};

export default AdminDashboardScreen;
