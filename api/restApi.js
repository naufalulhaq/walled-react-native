import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const token = AsyncStorage.getItem("userToken");

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// export const createPost = async (postData) => {
//   try {
//     const response = await api.post('/users', postData);
//     return response.data;
//   } catch (error) {
//     throw new Error('Failed to create post: ' + error.message);
//   }
// };

export const getTransaction = async () => {
  try {
    const response = await api.get("/transactions");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("error getTransaction", error.response.data.message)
    throw new Error("Failed to fetch data: " + error.response.data.message);
  }
};

export const getUser = async () => {
  try {
    const response = await api.get("/users/me");
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.log("error getUser", error.response.data.message)
    throw new Error("Failed to fetch data: " + error.response.data.message);
  }
};

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data.data;
  } catch (error) {
    console.log("catched error");
    console.log(error.response);
    AsyncStorage.setItem({});
    throw new Error(error.response.data.message || "Login failed");
  }
};

export const register = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Registration failed");
  }
};

export default api;
