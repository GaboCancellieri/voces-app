import React from "react";
import { AdminBar, Typography } from "ccomponents/index";
import screenStyles from "styles/adminScreens.module.scss";
import { COLOR_PRIMARY } from "constants/colors";
import {
  AdminHomeBanner,
  AdminHomeStaff,
  AdminHomeNews,
} from "src/components/layout/AdminHome";
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
        <Typography
          fontFamily={"fjallaOne"}
          size={"50px"}
          color={COLOR_PRIMARY}
          align={LEFT}
        >
          NOVEDADES
        </Typography>

        <AdminHomeNews></AdminHomeNews>

        <Typography
          fontFamily={"fjallaOne"}
          size={"50px"}
          color={COLOR_PRIMARY}
          align={LEFT}
        >
          STAFF
        </Typography>

        <AdminHomeStaff></AdminHomeStaff>
      </div>
    </div>
  );
};

export default AdminHomeScreen;
