import { useContext } from "react";
import { showAlert } from "src/context/AlertContext/actions";
import { AlertDispatchContext } from "src/context/AlertContext/AlertContext";
import { LoginService } from "./services";
import HomeBannerService from "./services/HomeBannerService";
import ProyectBannerService from "./services/ProyectBannerService";
import ShowsService from "./services/ShowsService";
import ProyectAreasService from "./services/ProyectAreasService";
import ActivitiesCardsService from "./services/ActivitiesCardsService";
import HomeNewsService from "./services/HomeNewsService";

export const useActivitiesCardsService = () => {
  return new ActivitiesCardsService(useContext(AlertDispatchContext));
};

export const useHomeBannerService = () => {
  return new HomeBannerService(useContext(AlertDispatchContext));
};

export const useHomeNewsService = () => {
  return new HomeNewsService(useContext(AlertDispatchContext));
};

export const useProyectBannerService = () => {
  return new ProyectBannerService(useContext(AlertDispatchContext));
};

export const useProyectAreasService = () => {
  return new ProyectAreasService(useContext(AlertDispatchContext));
};

export const useShowsService = () => {
  return new ShowsService(useContext(AlertDispatchContext));
};

export const useLoginService = () => {
  return new LoginService(useContext(AlertDispatchContext));
};

export const handleAlert = async (func: Function, dispatch: any) => {
  try {
    const { status, data } = await func();
    if (status === 200) {
      alert("Exito!");
    }
    return data;
  } catch (error: any) {
    console.log({ error });
    dispatch(
      showAlert({
        type: "urgent",
        variant: "danger",
        message: error.response?.data?.message ?? error.message,
      })
    );
  }
};
