import React from "react";
import { AdminBar, Typography } from "ccomponents/index";
import screenStyles from "styles/adminScreens.module.scss";
import { COLOR_PRIMARY } from "constants/colors";

import { LEFT } from "constants/alignment";
//import AdminActivitiesCards from "src/components/layout/AdminActivities";
import { AdminActivitiesCards } from "src/components/layout";

const AdminActivitiesScreen = () => {
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
          ACTIVIDADES
        </Typography>
        <AdminActivitiesCards />
      </div>
    </div>
  );
};

export default AdminActivitiesScreen;
