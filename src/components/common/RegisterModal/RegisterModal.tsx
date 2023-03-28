import React, { useState } from "react";
import { Button, Input, Logo, Modal, Typography } from "ccomponents/index";
import styles from "./registerModal.module.scss";
import { RegisterModalProps } from "./types";
import connect from "src/context/Store/connect";
import { UserDispatchContext } from "src/context/UserContext/UserContext";
import { COLOR_BLACK } from "constants/colors";
import { useRegService } from "src/api/api";

const RegisterModal = ({ onCancel, isActive = false }: RegisterModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const regService = useRegService();
  const [error, setError] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const validateFormInput = (event: any) => {
    event.preventDefault();
    let inputError = {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
    if (!name && !lastName) {
      setError({
        ...inputError,
        name: "Ingrese su Nonbre",
        lastName: "Ingrese su Apellido",
      });
      return;
    }
    if (!email && !password) {
      setError({
        ...inputError,
        email: "Ingrese un Email Válido",
        password: "Ingrese una Contraseña",
      });
      return;
    }

    if (!email) {
      setError({
        ...inputError,
        email: "Ingrese un Email Válido",
      });
      return;
    }

    if (password !== confPass) {
      setError({
        ...inputError,
        confirmPassword: "Las Contraseñas No Coinciden",
      });
      return;
    }

    if (!password) {
      setError({
        ...inputError,
        password: "Ingrese una Contraseña",
      });
      return;
    }

    setError(inputError);
  };

  const handleLogin = async () => {
    try {
      if (email && password && name && lastName) {
        const result = await regService.create(email, password, name, lastName);
        console.log({ result });
      }
      onCancel();
    } catch (error) {
      console.log({ error });
      onCancel();
    }
  };

  return (
    <Modal
      isActive={isActive}
      width={"500px"}
      height={"fit-content"}
      onCancel={onCancel}
    >
      <form className="register-form" onSubmit={validateFormInput}>
        <div className={styles.registerModalContainer}>
          <div className={styles.logoContainer}>
            <Logo height={"100px"} width={"100px"}></Logo>
          </div>
          <div className={styles.inputContainer}>
            <Typography
              className={styles.titles}
              fontFamily="sourceSans"
              size={"20px"}
              color={COLOR_BLACK}
            >
              Nombre
            </Typography>

            <Input
              value={name}
              type="email"
              placeholder="Ingrese su email"
              onChange={(e) => setName(e.target.value)}
            />

            <Typography
              className={styles.titles}
              fontFamily="sourceSans"
              size={"20px"}
              color={COLOR_BLACK}
            >
              Apellido
            </Typography>

            <Input
              value={lastName}
              type="email"
              placeholder="Ingrese su email"
              onChange={(e) => setLastName(e.target.value)}
            />

            <Typography
              className={styles.titles}
              fontFamily="sourceSans"
              size={"20px"}
              color={COLOR_BLACK}
            >
              Email
            </Typography>

            <Input
              value={email}
              type="email"
              placeholder="Ingrese su email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className={styles.error_message}>{error.email}</p>
            <Typography
              className={styles.titles}
              fontFamily="sourceSans"
              size={"20px"}
              color={COLOR_BLACK}
            >
              Contraseña
            </Typography>
            <Input
              value={password}
              type="password"
              placeholder="Ingrese su contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className={styles.error_message}>{error.password}</p>

            <Typography
              className={styles.titles}
              fontFamily="sourceSans"
              size={"20px"}
              color={COLOR_BLACK}
            >
              Confirmar contraseña
            </Typography>
            <Input
              value={confPass}
              type="password"
              placeholder="Confirme su contraseña"
              onChange={(e) => setConfPass(e.target.value)}
            />
            <p className={styles.error_message}>{error.confirmPassword}</p>
          </div>
          <div className={styles.buttonContainer}>
            <Button type="submit" onClick={handleLogin}>
              <Typography>REGISTRARSE</Typography>
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

const mapDispatchToProps = {
  userDispatcher: UserDispatchContext,
};

export default connect({ mapDispatchToProps })(RegisterModal);
