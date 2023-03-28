import { useContext } from "react";
import { showAlert } from "src/context/AlertContext/actions";
import { AlertDispatchContext } from "src/context/AlertContext/AlertContext";
import {
  LoginService,
  HomeBannerService,
  HomeStaffService,
  ProyectBannerService,
  ShowsService,
  ProyectAreasService,
  ActivitiesCardsService,
  HomeNewsService,
} from "./services";
import RegService from "./services/RegistrationService";
import UsersService from "./services/UsersService";

export const useActivitiesCardsService = () => {
  return new ActivitiesCardsService(useContext(AlertDispatchContext));
};

export const useHomeBannerService = () => {
  return new HomeBannerService(useContext(AlertDispatchContext));
};

export const useHomeNewsService = () => {
  return new HomeNewsService(useContext(AlertDispatchContext));
};

export const useHomeStaffService = () => {
  return new HomeStaffService(useContext(AlertDispatchContext));
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

export const useRegService = () => {
  return new RegService(useContext(AlertDispatchContext));
};

export const useUsersService = () => {
  return new UsersService(useContext(AlertDispatchContext));
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
