import React, { useReducer } from "react";
import { Button, Input, Logo, Modal, Typography } from "ccomponents/index";
import styles from "./loginModal.module.scss";
import { loginInitialState, loginReducer } from "./context/reducer";
import {
  setLoginEmail,
  setLoginIsSubmitted,
  setLoginPassword,
} from "./context/actions";
import { LoginModalProps } from "./types";
import { getUserFromAccessToken } from "src/utils/user";
import connect from "src/context/Store/connect";
import { UserDispatchContext } from "src/context/UserContext/UserContext";
import { loginUser } from "src/context/UserContext/actions";
import { useLoginService } from "src/api/api";

const LoginModal = ({
  onCancel,
  isActive = false,
  userDispatcher,
}: LoginModalProps) => {
  const loginService = useLoginService();
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    loginInitialState
  );

  const handleEmailChange = (event: any) => {
    loginDispatch(setLoginEmail(event.target.value));
  };

  const handlePasswordChange = (event: any) => {
    loginDispatch(setLoginPassword(event.target.value));
  };

  const handleLogin = async () => {
    try {
      loginDispatch(setLoginIsSubmitted(true));
      if (loginState.email && loginState.password) {
        const result = await loginService.login(
          loginState.email,
          loginState.password
        );
        console.log({ result });
        const user = getUserFromAccessToken(result.accessToken);
        if (user) {
          userDispatcher(
            loginUser(user, result.accessToken, result.refreshToken)
          );
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("refreshToken", result.refreshToken);
        }
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
      <div className={styles.loginModalContainer}>
        <div className={styles.logoContainer}>
          <Logo height={"100px"} width={"100px"}></Logo>
        </div>
        <div className={styles.inputContainer}>
          <Input
            placeholder="email"
            onChange={handleEmailChange}
            value={loginState.email}
          />
          <Input
            type="password"
            placeholder="contraseña"
            onChange={handlePasswordChange}
            value={loginState.password}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            onClick={handleLogin}
            disabled={!loginState.email || !loginState.password ? true : false}
          >
            <Typography>Iniciar Sesion</Typography>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const mapDispatchToProps = {
  userDispatcher: UserDispatchContext,
};

export default connect({ mapDispatchToProps })(LoginModal);
