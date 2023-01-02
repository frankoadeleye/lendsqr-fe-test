import axios from "axios";
import Endpoint from "src/utils/network-requests/endpoint";

const headers = {
  Accept: "application/json",
};

const GET_USERS = (data: any) => {
  return axios.get(Endpoint.users.all, { headers });
};

const GET_USER_DETAILS = (id: string) => {
  return axios.get(Endpoint.users.user_details(id), { headers });
};

const Services = {
  GET_USERS,
  GET_USER_DETAILS,
};

export default Services;
