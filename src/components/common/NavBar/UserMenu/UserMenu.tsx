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
import { COLOR_BLACK, COLOR_PRIMARY } from "constants/colors";
import { USER_MENU_OPTIONS } from "./constants";
import { logout } from "./utils";
import { useNavigate } from "react-router-dom";

const UserMenu = ({
  isActive = false,
  currentUser,
  dispatchUser,
  onClose,
}: UserMenuProps) => {
  const navigate = useNavigate();
  let menuOptions = USER_MENU_OPTIONS;

  if (!isActive || !currentUser) return <></>;
  const { isAdmin, name, lastName } = currentUser;

  if (!isAdmin) {
    menuOptions = USER_MENU_OPTIONS.filter((option) => !option.isAdmin);
  }

  const handleOptionClick = (key: string) => {
    switch (key) {
      case "editPage":
        return navigate("/admin");
      case "account":
        return navigate("/user");
      case "logout":
        onClose();
        navigate("/");
        return logout(dispatchUser);
      default:
        return;
    }
  };

  return (
    <div className={styles.userMenuContainer}>
      <div className={styles.userMenuContent}>
        <div className={styles.userName}>
          <Typography
            fontFamily={"fjallaOne"}
            size={"25px"}
            color={COLOR_PRIMARY}
          >{`${name} ${lastName}`}</Typography>
        </div>
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
