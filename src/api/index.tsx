import axios from "axios";

export const logIn = async (data: any) => {
  const res = await axios.post("auth/login", data, {withCredentials: true});
  return res;
};
export const register = async (data: any) => {
  const res = await axios.post("http://localhost:8080/auth/register", data);
  return res;
};

export const registerPlace = async (data: any) => {
  try {
    const res = await axios.post("/places", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};
