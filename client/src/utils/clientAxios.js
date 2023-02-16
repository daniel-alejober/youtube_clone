import axios from "axios";

const clientAxios = axios.create();
clientAxios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

export default clientAxios;
