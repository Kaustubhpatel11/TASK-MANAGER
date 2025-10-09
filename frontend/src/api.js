import axios from "axios";

const API = axios.create({
  baseURL: "https://task-manager-kaustubh.onrender.com",
});

export default API;
