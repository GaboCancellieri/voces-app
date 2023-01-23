import { Component } from "react";
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
      const { data } = await http.post(rootURL, { email, password });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default LoginService;
