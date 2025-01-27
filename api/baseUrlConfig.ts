import axios from "axios";

const instance = axios.create({ baseURL: "http://192.168.1.28:8080/api" })
const baseUrl = "https://myprojectbackend-cb85.onrender.com/api"
// const instance = axios.create({ baseURL: "https://myprojectbackend-cb85.onrender.com/api" })


export { instance, baseUrl }