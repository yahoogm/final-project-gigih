const API_URL =
  process.env.NODE_ENV === 'development'
    ? import.meta.env.VITE_REACT_APP_API_URL
    : import.meta.env.VITE_REACT_APP_API_URL_PUBLIC;

export default API_URL;
