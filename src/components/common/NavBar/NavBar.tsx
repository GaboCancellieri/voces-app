import React from "react";
import Button from "../Button";
import Logo from "../Logo";
import style from "./navBar.module.scss";

const NavBar = () => {
  return (
    <>
      <div className={style.navBarContainer}>
        <Logo height="100%" width="75px" />
        <Button variant="blank" text="INICIO" />
        <Button variant="blank" text="PROYECTO" />
        <Button size="fit" variant="blank" text="ACTIVIDADES" />
        <Button variant="blank" text="STREAMING" />
        <Button variant="blank" text="CONTACTO" />
        <Button variant="blank" text="PLATAFORMA" />
        <Button variant="blank" text="INICIAR SESION" />
        <Button variant="blank" text="REGISTRARME" />
      </div>
    </>
  );
};

export default NavBar;
