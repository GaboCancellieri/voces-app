import { Component } from "react";
import { handleAlert } from "../api";
import { ROUTES } from "../constants";

import http from "../http-common";
import { IHomeNews } from "../types";
const rootURL = ROUTES.HOME_NEWS;

class HomeNewsService extends Component<{}, { dispatch: any }> {
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

  async create(payload: IHomeNews) {
    const result = await handleAlert(
      () =>
        http.post(`${rootURL}`, {
          ...payload,
        }),
      this.state.dispatch
    );
    return result;
  }

  async update(id: string, payload: IHomeNews) {
    const result = await handleAlert(
      () =>
        http.patch(`${rootURL}/${id}`, {
          ...payload,
        }),
      this.state.dispatch
    );
    return result;
  }

  async delete(id: string) {
    const result = await handleAlert(
      () => http.delete(`${rootURL}/${id}`),
      this.state.dispatch
    );
    return result;
  }
}

export default HomeNewsService;
