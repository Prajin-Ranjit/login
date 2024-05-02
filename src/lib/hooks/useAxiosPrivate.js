import { useEffect } from "react";
import { useSetUserContext, useUserContext } from "../../components/context/LoggedInUserProvider";
import { AxiosInstance } from "../api/AxiosInstance";
import { useNavigate } from "react-router-dom";

const useAxiosPrivate = () => {
  const { jwt_token } = useUserContext();
  const setUser = useSetUserContext();
  // const navigate = useNavigate()

  const getTokenFromLocalStorage = localStorage.getItem('token')

  useEffect(() => {
    const requestIntercept = AxiosInstance.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${jwt_token || getTokenFromLocalStorage}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = AxiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        setUser({})
        localStorage.removeItem('token')
        // navigate('/')
        return Promise.reject(error);
      }
    );

    return () => {
      AxiosInstance.interceptors.request.eject(requestIntercept);
      AxiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [jwt_token]);

  return AxiosInstance;
};

export default useAxiosPrivate;
