// import { API_URL } from "../api";
const API_URL = "http://127.0.0.1:5100" || window.location.origin;
console.log("API_URL is ", API_URL)

export class Services {

    async Signin(email, password) {
        // let info = JSON.stringify({ email: email, password: password })
        // const response = await fetch(`${API_URL}/api/login`, {
        //     method: "POST",
        //     body: info,
        //     headers: {
        //         "content type": "application/json"
        //     }
        // })
        //     .then(res => res.json());
        console.log("signin : ", email, password)
        return true;
    }
    async Signup(email, password) {
        // let info = JSON.stringify({ email: email, password: password })
        // const response = await fetch(`${API_URL}/api/login`, {
        //     method: "POST",
        //     body: info,
        //     headers: {
        //         "content type": "application/json"
        //     }
        // })
        //     .then(res => res.json());
        console.log("signup : ", email, password)
        return true;
    }
}
export const services = new Services();
