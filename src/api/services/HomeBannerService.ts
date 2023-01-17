import { Component } from "react";
import { handleAlert } from "../api";
import { ROUTES } from "../constants";

import http from "../http-common";
import { IHomeBannerInfo } from "../types";
const rootURL = ROUTES.HOME_BANNER;

class HomeBannerService extends Component<{}, { dispatch: any }> {
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

  async update(id: string, payload: IHomeBannerInfo) {
    const data = await handleAlert(() =>
      http.patch(`${rootURL}/${id}`, {
        payload,
      })
    );
    return data;
  }
}

export default HomeBannerService;
