import React from "react";
import { AdminBar, Typography } from "ccomponents/index";
import screenStyles from "styles/adminScreens.module.scss";
import { COLOR_PRIMARY } from "constants/colors";
import { AdminHomeBanner } from "src/components/layout/AdminHome";
import { LEFT } from "constants/alignment";

const AdminHomeScreen = () => {
  return (
    <div className={screenStyles.adminScreenContainer}>
      <AdminBar />
      <div className={screenStyles.adminScreenContent}>
        <Typography
          fontFamily={"fjallaOne"}
          size={"50px"}
          color={COLOR_PRIMARY}
          align={LEFT}
        >
          PANTALLA PRINCIPAL
        </Typography>
        <AdminHomeBanner />
      </div>
    </div>
  );
};

export default AdminHomeScreen;
