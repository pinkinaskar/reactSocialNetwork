import { API } from "../config";
import axios from "axios";

export const login = (user) => {
  return new Promise((resolve, reject) => {
      axios
          .post(`${API}/auth/signin`,user)
          .then(res => {
              resolve(res)
          })
          .catch(err => reject(err))
  })
}



export const signup = async (user) => {
  // console.log(user);
  try {
    const response = await fetch(`${API}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};



export const authenticate = (data, callbackFunction) => {
  if (typeof window !== "undefined") {
    //localStorage.setItem("jwt", JSON.stringify(data));
    console.log('=---',data.data.data.access_token, JSON.stringify(data));
    localStorage.setItem("jwt", data.data.data.access_token);
    localStorage.setItem("userauthdata", JSON.stringify(data));
    callbackFunction();
  }
};

export const logout = async (callbackFunction) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userauthdata");
    localStorage.removeItem("jwt");
    callbackFunction();

    try {
      // const response = await fetch(`${API}/logout`, {
      //   method: "GET",
      // });
      console.log("logged out");
    } catch (err) {
      return console.log(err);
    }
  }
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  console.log('%%%%%%%%%%%%', JSON.parse(localStorage.getItem("userauthdata")));
  if (localStorage.getItem("userauthdata")) {   
    return JSON.parse(localStorage.getItem("userauthdata"));
  } else {
    return false;
  }
};
