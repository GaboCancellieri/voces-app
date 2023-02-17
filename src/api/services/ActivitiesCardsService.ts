import { Component } from "react";
import { handleAlert } from "../api";
import { ROUTES } from "../constants";

import http from "../http-common";
import { IActivitiesCards } from "../types";
const rootURL = ROUTES.ACTIVITIES_CARDS;

class ActivitiesCardsService extends Component<{}, { dispatch: any }> {
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

  async create(payload: IActivitiesCards) {
    const result = await handleAlert(
      () =>
        http.post(`${rootURL}`, {
          ...payload,
        }),
      this.state.dispatch
    );
    return result;
  }

  async update(id: string, payload: IActivitiesCards) {
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

export default ActivitiesCardsService;
