// import { API_URL } from "../api";
const API_URL = "http://127.0.0.1:5100" || window.location.origin;
console.log("API_URL is ", API_URL)

export class Services {

    async Signin(email, password) {
        console.log("signin : ", email, password)
        let info = JSON.stringify({ email: email, password: password })
        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                body: info,
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                // If the response is not ok, throw an error with the status text
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Signin failed:", error.message);
            throw error;
        }
    }
    async Signup(email, password) {
        console.log("signup : ", email, password)
        let info = JSON.stringify({ email: email, password: password })
        try {
            const response = await fetch(`${API_URL}/api/auth/signup`, {
                method: "POST",
                body: info,
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Signup failed:", error.message);
            throw error;
        }
    }
}
export const services = new Services();
