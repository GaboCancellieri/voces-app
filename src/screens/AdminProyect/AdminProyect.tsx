import React from "react";
import { AdminBar, Typography } from "ccomponents/index";
import screenStyles from "styles/adminScreens.module.scss";
import { COLOR_PRIMARY } from "constants/colors";
import { AdminProyectBanner } from "src/components/layout/AdminProyects";
import { LEFT } from "constants/alignment";
import AdminProyectAreas from "src/components/layout/AdminProyects/AdminProyectAreas";

const AdminProyectScreen = () => {
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
          PROYECTO
        </Typography>
        <AdminProyectBanner />
        <Typography
          fontFamily={"fjallaOne"}
          size={"50px"}
          color={COLOR_PRIMARY}
          align={LEFT}
        >
          AREAS
        </Typography>

        <AdminProyectAreas />
      </div>
    </div>
  );
};

export default AdminProyectScreen;
