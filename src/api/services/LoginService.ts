import { Component } from "react";
import { handleAlert } from "../api";
import { ROUTES } from "../constants";

import http from "../http-common";
const rootURL = ROUTES.LOGIN;

class LoginService extends Component<{}, { dispatch: any }> {
  constructor(dispatch: any) {
    super({});
    this.state = {
      dispatch,
    };
  }

  async login(email: string, password: string) {
    try {
      const result = await handleAlert(
        () => http.post(rootURL, { email, password }),
        this.state.dispatch
      );
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

export default LoginService;
