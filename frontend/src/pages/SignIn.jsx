import React from "react"
import { services } from "../services/services.jsx"

export function Signin() {
    const SignInClick = () => {
        let email = document.getElementById("email").value
        let pass = document.getElementById("pass").value
        services.Signin(email, pass).then(function (response) {
            if (response === true) {
                console.log("Sign in True : ", response, " For : ", email, pass)
            } else {
                console.error("Sign in False :", response, " For : ", email, pass)
            }
        })
    }

    const SignUpClick = () => {
        let email = document.getElementById("email").value
        let pass = document.getElementById("pass").value
        services.Signup(email, pass).then(function (response) {
            if (response === true) {
                console.log("Signup is True : ", response, " For :", email, pass)
            }
            else {
                console.error("Signup is False : ", response, " For :", email, pass)
            }
        })
    }

    return (
        <>
            <form action="submit">
                <div><h4>Sign In</h4></div>
                <div>
                    <label type="text" className="email" >Email :      </label>
                    <input type="text" name="email" id="email" placeholder="Input Email" />
                </div>
                <div>
                    <label type="text" className="email" >Password :</label>
                    <input type="password" name="pass" id="pass" placeholder="Input Password" />
                </div>
                <button onClick={SignInClick} type="button">Sign in</button>
                <button onClick={SignUpClick} type="button">Sign up</button>
            </form>
        </>
    )
}
export default Signin;
