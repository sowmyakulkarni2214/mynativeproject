import axios from "axios";

const instance = axios.create({ baseURL: "http://192.168.1.16:8080/api" })

export { instance }