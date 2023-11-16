import Cookies from "js-cookie";

export const useLogout = () => {
  return Cookies.remove("access_token");
};
