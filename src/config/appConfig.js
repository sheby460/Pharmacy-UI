export const appConfig = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL,

  apiEndpoints: {
    user: {
      login: process.env.REACT_APP_API_ENDPOINT_LOGIN,
      logout: process.env.REACT_APP_API_ENDPOINT_LOGOUT,
      register: process.env.REACT_APP_API_ENDPOINT_REGISTER,
    },
  },
};
