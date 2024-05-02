// authService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const logIn = async (email, password) => {
  const response = await axios.post(
    `${API_URL}/api/login`,
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  );
  return response.data;
};

export const logOut = async () => {
  const response = await axios.post(
    `${API_URL}/api/logout`,
    {},
    {
      withCredentials: true,
    }
  );
  return response.data;
};
