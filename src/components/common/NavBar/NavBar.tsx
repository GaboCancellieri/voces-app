import { FLAT_COLOR_ICONS } from "constants/icon";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import connect from "src/context/Store/connect";
import { IUserState } from "src/context/UserContext/types";
import { UserStateContext } from "src/context/UserContext/UserContext";
import { Icon, LoginModal } from "..";
import Button from "../Button";
import Logo from "../Logo";
import { NAV_BAR_OPTIONS } from "./constants";
import styles from "./navBar.module.scss";
import { NavBarProps } from "./types";
import UserMenu from "./UserMenu";

const NavBar = ({ currentUser }: NavBarProps) => {
  const [activeLoginModal, setActiveLoginModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const toggleLoginModal = () => {
    setActiveLoginModal(!activeLoginModal);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <>
      <div className={styles.navBarContainer}>
        <>
          <Link to="/">
            <Logo height="100%" width="75px" />
          </Link>
          {NAV_BAR_OPTIONS.map((option, index) => {
            return (
              <div key={index}>
                <Link to={option.link}>
                  <Button variant="blank" hoverEffect>
                    {option.name}
                  </Button>
                </Link>
              </div>
            );
          })}
          {!currentUser ? (
            <>
              <Button variant="blank" hoverEffect onClick={toggleLoginModal}>
                INICIAR SESION
              </Button>
              <Button variant="blank" hoverEffect>
                REGISTRARME
              </Button>
            </>
          ) : (
            <Button variant="blank" onClick={toggleUserMenu}>
              <Icon
                iconId={"FcBusinessman"}
                iconDesign={FLAT_COLOR_ICONS}
              ></Icon>
            </Button>
          )}
        </>
      </div>
      {currentUser ? (
        <UserMenu isActive={showUserMenu} onClose={toggleUserMenu} />
      ) : null}
      <LoginModal onCancel={toggleLoginModal} isActive={activeLoginModal} />
    </>
  );
};

const mapStateToProps = [
  {
    context: UserStateContext,
    mapStateToProps: ({ currentUser }: IUserState) => ({
      currentUser,
    }),
  },
];

export default connect({ mapStateToProps })(NavBar);
