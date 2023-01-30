import React from "react";
import { AdminBar, Typography } from "ccomponents/index";
import screenStyles from "styles/adminScreens.module.scss";
import { AdminStreaming } from "src/components/layout";
import { COLOR_PRIMARY } from "constants/colors";
import { LEFT } from "constants/alignment";

const AdminStreamingScreen = () => {
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
          STREAMING!
        </Typography>
        <AdminStreaming />
      </div>
    </div>
  );
};

export default AdminStreamingScreen;
