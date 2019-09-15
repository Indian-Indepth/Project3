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
    let options = {
      url: server_url+"/api/users/"+userData._id,
      data: userData,
      method: 'POST',
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    };
    return axios(options);
  },
  // Gets all trainer personal info
  getAllTrainerPersonalInfo: function() {
    return axios.get("/api/trainer-personal-info");
  },
  // Gets the user with the given id
  getTrainerPersonalInfo: function(id) {
    return axios.get("/api/trainer-personal-info/" + id);
  },
  // Deletes the user with the given id
  deleteTrainerPersonalInfo: function(id) {
    return axios.delete("/api/trainer-personal-info/" + id);
  },
  // Saves a user to the database
  saveTrainerPersonalInfo: function(userData) {
    console.log(userData)
    let options = {
      url: server_url+"/api/trainer-personal-info/",
      data: userData,
      method: 'POST',
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    };
    return axios(options);
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
  },

  //Packages
  getPackages: function() {
    return axios.get("/api/packages");
  },
};
