import { GET_TODO } from "../config/constants";
import axios from "axios";
export const getTodo = () => {
  return {
    type: GET_TODO,
    payload: axios({
      method: "GET",
      url: "http://5e4a33ae6eafb7001488c0e4.mockapi.io/api/todo/does",
      
    })
  };
};
