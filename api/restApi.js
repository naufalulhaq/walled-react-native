import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// const token = AsyncStorage.getItem("userToken");

const api = axios.create({
  baseURL: "http://54.254.164.127/api/v1",
});

// export const fetchPosts = async () => {
//   try {
//     const response = await api.get('/users');
//     return response.data.data;
//   } catch (error) {
//     throw new Error('Failed to fetch posts: ' + error.message);
//   }
// };

// export const createPost = async (postData) => {
//   try {
//     const response = await api.post('/users', postData);
//     return response.data;
//   } catch (error) {
//     throw new Error('Failed to create post: ' + error.message);
//   }
// };

// export const login = async (email, password) => {
//   try {
//     const response = await api.post('/login', { email, password });
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data?.error || 'Login failed');
//   }
// };

export const register = async (data) => {
  try {
    console.log(typeof data)
    console.log("ini udah sampe api")
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Registration failed");
  }
};

export default api;
