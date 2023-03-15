import { Component } from "react";

import { ROUTES } from "../constants";

import http from "../http-common";
import { IUser } from "../types";
const rootURL = ROUTES.USERS;

class UsersService extends Component<{}, { dispatch: any }> {
  constructor(dispatch: any) {
    super({});
    this.state = {
      dispatch,
    };
  }

  async get() {
    try {
      const { data } = await http.get(rootURL);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default UsersService;
