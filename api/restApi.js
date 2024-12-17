import axios from "axios";

const api = axios.create({
  baseURL: "https://regres.in/api",
});

export const fetchPost = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users" + error.message);
  }
};
export default api;