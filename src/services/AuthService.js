import axios from 'axios';
import JwtService from "../services/JwtService";

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
      .then(response => response.data);
  },
  // Get Current loggedIn User
  getCurrent() {
    return axios.get(url + 'rest-auth/user/', {
      headers: {
        'Authorization': `Bearer ${JwtService.getToken()}`
      }
    }).then(response => response.data);
  }
};