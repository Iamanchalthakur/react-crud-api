import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.29.11:4000/api",
  headers: {
    "Content-type": "application/json"
  }
});