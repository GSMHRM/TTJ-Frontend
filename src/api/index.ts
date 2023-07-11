import axios from "axios";
import TokenManager from "./TokenManager";
import { Envconfig } from "./envConfig";

const API = axios.create({
  baseURL: Envconfig.TTJ_SERVER_URL,
  withCredentials: true
});

API.interceptors.request.use(async config => {
  const tokenManager = new TokenManager();

  if (
    !tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken
    ) &&
    tokenManager.validateToken(
      tokenManager.refreshExp,
      tokenManager.refreshToken
    )
  ) {
    tokenManager.initToken();
  } else if (
    !tokenManager.validateToken(
      tokenManager.accessExp,
      tokenManager.accessToken
    ) &&
    !tokenManager.validateToken(
      tokenManager.refreshExp,
      tokenManager.refreshToken
    )
  )
    tokenManager.removeTokens();

  config.headers["Authorization"] = tokenManager.accessToken
    ? `Bearer ${tokenManager.accessToken}`
    : undefined;

  return config;
});

export default API;
