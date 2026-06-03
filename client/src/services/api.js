import axios from "axios";

const API = axios.create({
  baseURL: "https://smartai-interview.onrender.com/api",
});

export default API;