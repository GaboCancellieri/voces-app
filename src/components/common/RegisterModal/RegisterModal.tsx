import React, { useEffect, useState } from "react";
import { Button, Input, Logo, Modal, Typography } from "ccomponents/index";
import styles from "./registerModal.module.scss";
import { RegisterModalProps } from "./types";
import connect from "src/context/Store/connect";
import { UserDispatchContext } from "src/context/UserContext/UserContext";
import { COLOR_BLACK } from "constants/colors";
import { useRegService } from "src/api/api";
import classnames from "classnames";

const RegisterModal = ({ onCancel, isActive = false }: RegisterModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passMatch, setPassMatch] = useState(false);

  useEffect(() => {
    setPassMatch(password === confPass);
  }, [password, confPass]);

  const regService = useRegService();

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
      <form className="register-form">
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
            <p
              className={classnames(styles.instructions, {
                [styles.offscreen]: password.length == 0 || password.length > 7,
              })}
            >
              La contraseña debe contener al menos 8 caracteres
            </p>

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
            <p
              className={classnames(styles.instructions, {
                [styles.offscreen]: passMatch || confPass.length == 0,
              })}
            >
              La contraseña no coincide
            </p>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              type="submit"
              onClick={handleLogin}
              disabled={
                !name || !lastName || !email || !password || !passMatch
                  ? true
                  : false
              }
            >
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
