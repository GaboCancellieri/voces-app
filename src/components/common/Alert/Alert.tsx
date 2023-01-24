import React from "react";
import { COLOR_BLACK } from "constants/colors";
import { closeAlert } from "src/context/AlertContext/actions";
import {
  AlertDispatchContext,
  AlertStateContext,
} from "src/context/AlertContext/AlertContext";
import { IAlertState } from "src/context/AlertContext/types";
import connect from "src/context/Store/connect";
import { Button, Icon, Modal, Typography } from "..";
import {
  ALERT_COLOR_VARIANTS,
  ALERT_ICON_VARIANTS,
  ALERT_TITLE_VARIANTS,
} from "./constants";
import { AlertProps } from "./types";
import { FLAT_COLOR_ICONS, ICON_SIZE_LARGE } from "constants/icon";
import styles from "./alert.module.scss";

const Alert = ({ alert, dispatch }: AlertProps) => {
  if (!alert) return <></>;

  const { type, variant, message } = alert;
  const handleClose = () => {
    dispatch(closeAlert());
  };

  return (
    <Modal
      onCancel={handleClose}
      width={"500px"}
      height={"300px"}
      isActive={Boolean(alert)}
    >
      <div className={styles.alertContainer}>
        <Icon
          iconId={ALERT_ICON_VARIANTS[variant]}
          iconDesign={FLAT_COLOR_ICONS}
          size={ICON_SIZE_LARGE}
        />
        <Typography
          size={"30px"}
          color={ALERT_COLOR_VARIANTS[variant]}
          fontFamily={"fjallaOne"}
          variant={"bold"}
        >
          {ALERT_TITLE_VARIANTS[variant]}
        </Typography>
        <Typography color={COLOR_BLACK}>{message}</Typography>
        <Button variant={"secondary"} onClick={handleClose}>
          <Typography variant={"bold"}>OK!</Typography>
        </Button>
      </div>
    </Modal>
  );
};

const mapStateToProps = [
  {
    context: AlertStateContext,
    mapStateToProps: ({ currentAlert }: IAlertState) => ({
      alert: currentAlert,
    }),
  },
];

const mapDispatchToProps = {
  dispatch: AlertDispatchContext,
};

export default connect({ mapStateToProps, mapDispatchToProps })(Alert);
