import HomeBannerService from "./services/HomeBannerService";

export const useHomeBannerService = () => {
  return new HomeBannerService(null);
};

export const handleAlert = async (func: Function) => {
  try {
    const { status, data } = await func();
    if (status === 200) {
      alert("Exito!");
    }
    return data;
  } catch (error: any) {
    alert(error.message);
  }
};
