import axios from "axios";

const api = axios.create({
    baseURL:"https://api.diyaproject.id"
})
export default api