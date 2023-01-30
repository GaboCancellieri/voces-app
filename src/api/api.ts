import { useContext } from "react";
import { showAlert } from "src/context/AlertContext/actions";
import { AlertDispatchContext } from "src/context/AlertContext/AlertContext";
import { LoginService } from "./services";
import HomeBannerService from "./services/HomeBannerService";
import ShowsService from "./services/ShowsService";

export const useHomeBannerService = () => {
  return new HomeBannerService(useContext(AlertDispatchContext));
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
