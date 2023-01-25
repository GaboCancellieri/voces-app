import React from "react";
import styles from "./userMenu.module.scss";
import { UserMenuProps } from "./types";
import connect from "src/context/Store/connect";
import {
  UserDispatchContext,
  UserStateContext,
} from "src/context/UserContext/UserContext";
import { IUserState } from "src/context/UserContext/types";
import { Button, Typography } from "ccomponents/index";
import { COLOR_BLACK } from "constants/colors";
import { USER_MENU_OPTIONS } from "./constants";
import { logout } from "./utils";
import { useNavigate } from "react-router-dom";

const UserMenu = ({
  isActive = false,
  currentUser,
  dispatchUser,
  onClose,
}: UserMenuProps) => {
  if (!isActive || !currentUser) return <></>;

  const navigate = useNavigate();
  const { isAdmin, name, lastName } = currentUser;
  let menuOptions = USER_MENU_OPTIONS;
  if (!isAdmin) {
    menuOptions = USER_MENU_OPTIONS.filter((option) => !option.isAdmin);
  }

  const handleOptionClick = (key: string) => {
    switch (key) {
      case "editPage":
        return navigate("/admin");
      case "logout":
        onClose();
        return logout(dispatchUser);
      default:
        return;
    }
  };

  return (
    <div className={styles.userMenuContainer}>
      <div className={styles.userMenuContent}>
        <Typography
          fontFamily={"fjallaOne"}
          size={"25px"}
          color={COLOR_BLACK}
        >{`${name} ${lastName}`}</Typography>
        {menuOptions.map((option) => {
          return (
            <div key={option.key} className={styles.userMenuOption}>
              <Button
                variant={"blank"}
                size={"fit"}
                onClick={() => handleOptionClick(option.key)}
              >
                <Typography size={"18px"} color={COLOR_BLACK}>
                  {option.name}
                </Typography>
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = [
  {
    context: UserStateContext,
    mapStateToProps: ({ currentUser }: IUserState) => ({ currentUser }),
  },
];

const mapDispatchToProps = {
  dispatchUser: UserDispatchContext,
};

export default connect({ mapStateToProps, mapDispatchToProps })(UserMenu);
