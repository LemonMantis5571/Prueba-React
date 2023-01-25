import axios from "axios";
import axiosConfig from "../utils/config/axios.config";


export default function getRandomUser() {
    return axiosConfig.get('/', {
        validateStatus: function (status) {
            return status < 500;
        }
    })
} 