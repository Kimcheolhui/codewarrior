import axios from "axios";

const BASE_URL = "https://port-0-bewithyou-3nec02mlh1xeam3.sel4.cloudtype.app/";

export const axiosApi = () => {
  return axios.create({
    baseURL: BASE_URL,
  });
};
