import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "https://bistro-boss-server-kappa-mauve.vercel.app",
})

const useAxiosSecure = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();


    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token");
        console.log("request stopped by interceptors", token)
        config.headers.authorization = `Bearer ${token}`;
        // Do something before request is sent
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log(status)
        if (status === 401 || status === 403) {
            await logout()
            navigate("/login")
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;