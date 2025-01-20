import axios from "axios";

const instance = axios.create({ baseURL: "http://192.168.1.25:8080/api" })
// const instance = axios.create({ baseURL: "https://myprojectbackend-cb85.onrender.com/api" })


export { instance }