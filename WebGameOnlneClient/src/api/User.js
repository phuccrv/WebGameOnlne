import axiosClient from "./axiosClient";
import axios from "axios";
export class UserAPI {
  // API đăng ký
  static register(param) {
    const url = "http://localhost:4001/api/v1/user/register";
    return axios.post(url, param);
  }
  //   API đăng nhập
  static login(param) {
    const url = "http://localhost:4001/api/v1/user/login";
    return axios.post(url, param);
  }

//   static getUsers() {
//     const url = "/users";
//     return axiosClient.get(url);
//   }
}