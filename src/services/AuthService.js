import axios from 'axios';
import tokenService from "../services/tokenService";

const url = 'https://hiring-example-25770.botics.co/';
export default {
  // Login User
  login(credentials) {
    return axios
      .post(url + 'rest-auth/login/', credentials,
    )
      .then(response => response);
  },

  // Register New User
  signUp(credentials) {
    return axios
      .post(url + 'rest-auth/registration/', credentials)
      .then(response => {
        return response.data
      });
  },

  // Reset Password
  ResetPassword(credentials) {
    return axios.post(url + '/rest-auth/password/reset/', credentials).then(response => response.data);
  },

  // log out User
  logout() {
    return axios.post(url + 'rest-auth/logout/', tokenService.getToken()
    ).then(response => response.data);
  }
};