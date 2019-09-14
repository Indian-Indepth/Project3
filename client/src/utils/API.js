import axios from "axios";

const server_url = 'http://localhost:4000';

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post(server_url+"/api/users", userData);
  },
  loginSuccess: function () {
    let options = {
      url: server_url+"/auth/login/success",
      method: 'GET',
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    };
    return axios(options);
  }
};
