import axios from "axios";

// const instance = axios.create({ baseURL: "http://192.168.1.16:8080/api" })
const imageUrl = "http://192.168.1.16"
const instance = axios.create({ baseURL: "https://myprojectbackend-cb85.onrender.com/api" })


export { instance, imageUrl }