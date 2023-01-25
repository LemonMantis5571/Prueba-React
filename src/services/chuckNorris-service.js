import axiosChuckConfig from "../utils/config/axiosChuck.config";

export default function randomJoke() {
    return axiosChuckConfig.get('/', {
        validateStatus: function(status){
            return status < 500
        }
    })
}