// import { API_URL } from "../api";
const API_URL = "http://127.0.0.1:5100" || window.location.origin;
console.log("API_URL is ", API_URL)

const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY || "user_";

export class Services {

    async Signin(email, password) {
        console.log("signin : ", email, password)
        let info = JSON.stringify({ email: email, password: password })
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            body: info,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json());

        if (response.token) {
            localStorage.setItem(TOKEN_KEY, response.token);
            return (true)
        } else {
            return (response.error)
        }
    }
    async Signup(email, password) {
        console.log("signup : ", email, password)
        let info = JSON.stringify({ email: email, password: password })
        const response = await fetch(`${API_URL}/api/auth/signup`, {
            method: "POST",
            body: info,
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json());

        if (response.token) {
            localStorage.setItem(TOKEN_KEY, response.token);
            return (true)
        } else {
            return (response.error)
        }
    }

    async getToken() {
        try {
            const tk = localStorage.getItem(TOKEN_KEY); // Use TOKEN_KEY
            console.log("Token in local storage:", tk);
            return tk || null;
        } catch (error) {
            console.error("Error fetching token:", error);
            return null;
        }
    }

    logout() {
        localStorage.removeItem(TOKEN_KEY);
    }
}
export const services = new Services();
