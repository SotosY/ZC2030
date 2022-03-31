import axios from "axios";

export default axios.create({
  baseURL: "https://zc2030-zc2030.vercel.app/",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
});
