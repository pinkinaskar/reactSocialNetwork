import { API } from "../config";
import axios from "axios";

export const getContentList = async () => {

  const token = localStorage.getItem("jwt");

  return new Promise((resolve, reject) => {
    axios
        .get(`${API}/post`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => {
            resolve(res)
        })
        .catch(err => reject(err))
})
 
/*
  try {
   await axios.get(`${API}/post`, {
                          headers: {
                            'Authorization': `Bearer ${token}`
                          }
                        })
                        .then((res) => {
                          console.log('content-----------',res.data);
                         // resolve(res);
                        })
                        .catch((error) => {
                          console.error(error);
                          //reject(error);
                        });
  } catch (err) {
    return console.log(err);
  }
  */
};

export const getUserData = async (userId, token) => {
  try {
    const response = await fetch(`${API}/profile/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const changeUserData = async (userId, token, user) => {
  try {
    const response = await fetch(`${API}/profile/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const updateLocalStorageData = (user, next) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("jwt")) {
      let authData = JSON.parse(localStorage.getItem("jwt"));
      authData.user = user;
      localStorage.setItem("jwt", JSON.stringify(authData));
      next();
    }
  }
};

