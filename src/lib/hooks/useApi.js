import { AxiosInstancePublic } from "../api/AxiosInstance";
import { useMutation } from "@tanstack/react-query";

// Function for login using axios
const login = async (loginData) => {
  const { data } = await AxiosInstancePublic.post(
    "config/v1/auths/login",
    loginData
  );
  return data;
};

// custom hook for login
export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
