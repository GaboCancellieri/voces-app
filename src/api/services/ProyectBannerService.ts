import { Component } from "react";
import { handleAlert } from "../api";
import { ROUTES } from "../constants";

import http from "../http-common";
import { IProyectBannerInfo } from "../types";
const rootURL = ROUTES.PROYECT_BANNER;

class ProyectBannerService extends Component<{}, { dispatch: any }> {
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

  async update(id: string, payload: IProyectBannerInfo) {
    const result = await handleAlert(
      () =>
        http.patch(`${rootURL}/${id}`, {
          ...payload,
        }),
      this.state.dispatch
    );
    return result;
  }
}

export default ProyectBannerService;
