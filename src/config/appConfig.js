export const appConfig = {
  apiBaseUrl: process.env.REACT_APP_API_BASE_URL,

  apiEndpoints: {
    user: {
      login: process.env.REACT_APP_API_ENDPOINT_LOGIN,
      logout: process.env.REACT_APP_API_ENDPOINT_LOGOUT,
      register: process.env.REACT_APP_API_ENDPOINT_REGISTER,
    },
    supplier: {
      index: process.env.REACT_APP_API_ENDPOINT_SUPPLIER_INDEX,
      show: process.env.REACT_APP_API_ENDPOINT_SUPPLIER_SHOW,
      store: process.env.REACT_APP_API_ENDPOINT_SUPPLIER_STORE,
      update: process.env.REACT_APP_API_ENDPOINT_SUPPLIER_UPDATE,
      destroy: process.env.REACT_APP_API_ENDPOINT_SUPPLIER_DESTROY,
    },
    customer: {
      index: process.env.REACT_APP_API_ENDPOINT_CUSTOMER_INDEX,
      show: process.env.REACT_APP_API_ENDPOINT_CUSTOMER_SHOW,
      store: process.env.REACT_APP_API_ENDPOINT_CUSTOMER_STORE,
      update: process.env.REACT_APP_API_ENDPOINT_CUSTOMER_UPDATE,
      destroy: process.env.REACT_APP_API_ENDPOINT_CUSTOMER_DESTROY, 
    }
  }
};