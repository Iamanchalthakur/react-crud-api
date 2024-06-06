import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.29.11:4001/api",
  headers: {
    "Content-type": "application/json"
  }
});