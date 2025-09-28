import axios from "axios";

const api = axios.create({
  baseURL: "https://api.homologation.cliqdrive.com.br",
})

// Request
api.interceptors.request.use(
  (config) => {
    // Cabeçalhos tanto para GET quanto para POST
    config.headers.Accept = "application/json;version=v1_web";
    config.headers["Content-Type"] = "application/json";

    // Obter o token previamente salvo no localStorage
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if(token && config.url !== "/auth/login/") {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// Response
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
      }
    }
    return Promise.reject(error);
  }
);


export default api;