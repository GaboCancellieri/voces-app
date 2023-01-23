import React, { useState } from "react";
import { Link } from "react-router-dom";
import connect from "src/context/Store/connect";
import { IUserState } from "src/context/UserContext/types";
import { UserStateContext } from "src/context/UserContext/UserContext";
import { LoginModal } from "..";
import Button from "../Button";
import Logo from "../Logo";
import style from "./navBar.module.scss";
import { NavBarProps } from "./types";

const NavBar = ({ currentUser }: NavBarProps) => {
  const [activeLoginModal, setActiveLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setActiveLoginModal(!activeLoginModal);
  };

  return (
    <>
      <div className={style.navBarContainer}>
        <Link to="/">
          <Logo height="100%" width="75px" />
        </Link>
        <Link to="/">
          <Button variant="blank" hoverEffect>
            INICIO
          </Button>
        </Link>
        <Link to="/proyects">
          <Button variant="blank" hoverEffect>
            PROYECTO
          </Button>
        </Link>
        <Link to="/activities">
          <Button size="fit" variant="blank" hoverEffect>
            ACTIVIDADES
          </Button>
        </Link>
        <Button variant="blank" hoverEffect>
          STREAMING
        </Button>
        <Button variant="blank" hoverEffect>
          CONTACTO
        </Button>
        <Button variant="blank" hoverEffect>
          PLATAFORMA
        </Button>
        {!currentUser && (
          <>
            <Button variant="blank" hoverEffect onClick={toggleLoginModal}>
              INICIAR SESION
            </Button>
            <Button variant="blank" hoverEffect>
              REGISTRARME
            </Button>
          </>
        )}
      </div>
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
