import Cookies from "js-cookie";

import { Login } from "@/interfaces";

export const useLogin = ({ username, password }: Login) => {
  if (username === "aldrin" && password === "boss") {
    Cookies.set("access_token", "random_jwt_string");
    return true;
  }

  return false;
};
