import axios from "axios";

const instance = axios.create({ baseURL: "http://192.168.1.21:8080/api" })

export { instance }