import axios from "axios";
import { parseCookies } from "nookies";

const { '@retornei-app.token': token } = parseCookies();

export const api = axios.create({
    baseURL: "https://retornei-api-gateway.herokuapp.com"
})

if (token) {
    api.defaults.headers["Authorization"] = token;
}