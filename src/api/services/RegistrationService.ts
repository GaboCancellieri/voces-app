import { Component } from "react";
import { handleAlert } from "../api";
import { ROUTES } from "../constants";
import { IUser } from "../types";
import http from "../http-common";
const rootURL = ROUTES.USERS;

class RegService extends Component<{}, { dispatch: any }> {
  constructor(dispatch: any) {
    super({});
    this.state = {
      dispatch,
    };
  }

  async create(
    email: string,
    password: string,
    name: string,
    lastName: string
  ) {
    try {
      const result = await handleAlert(
        () => http.post(rootURL, { email, password, name, lastName }),
        this.state.dispatch
      );
      return result;
    } catch (error) {
      console.error(error);
    }
  }
}

export default RegService;
