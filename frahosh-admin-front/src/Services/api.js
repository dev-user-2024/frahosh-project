import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({
    baseURL: "https://support.frahosh.com/"
})

// api.interceptors.request.use((config) => {
//     const user = useAuthStore.getState().user;
//     if (user?.tokens?.access)
//       config.headers.Authorization = `Bearer ${user.tokens.access}`;
//     return config;
//   });

api.interceptors.response.use(
    (res) => res,
    (err) => {
        switch (err.response?.status) {
            case 400:
                toast.error(err.response.data.message);
                break;
            case 401:
                break;
            case 402:
                toast.error(err.response.data.message);
                break;
            case 404:
                toast.error(`${err.config.url} not found`);
                break;
            case 429:
                toast.error(err.response.data.message);
                break;
            case 422:
                toast.error(err.response.data.message);
                break;
            case 500:
                toast.error(err.response.data.message);
                break;
            default:
                console.error(err);
                break;
        }
        return Promise.reject(err);
    }
)

export default api