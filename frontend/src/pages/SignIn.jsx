import React, { useState } from "react";
import '../assets/login.css';
import '../output.css'
import { services } from "../services/services.jsx";

export function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);

    const SignInClick = (e) => {
        e.preventDefault(); // Prevent form submission
        services.Signin(email, password).then(function (response) {
            if (response === true) {
                console.log("Sign in True : ", response, " For : ", email, password);
                setIsSignedIn(true)
            } else {
                console.error("Sign in False :", response, " For : ", email, password);
                setIsSignedIn(false)
            }
        });
    };

    const SignUpClick = (e) => {
        e.preventDefault(); // Prevent form submission
        services.Signup(email, password).then(function (response) {
            if (response === true) {
                console.log("Signup is True : ", response, " For :", email, password);
            } else {
                console.error("Signup is False : ", response, " For :", email, password);
            }
        });
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form className="bg-white p-6 shadow-md absolute">
                    <div>
                        <h4 className="text-black mb-[150px] sm:mb-[100px] text-center">Sign In</h4>
                    </div>
                    <div className="text-black mr-10">
                        <label htmlFor="email" className="text-black text-[16px]">Email:</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Input Email"
                            className="border border-gray-300 rounded p-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                        />
                    </div>
                    <div className="text-black mr-10">
                        <label htmlFor="pass" className="email">Password:</label>
                        <input
                            type="password"
                            name="pass"
                            id="pass"
                            placeholder="Input Password"
                            className="border border-gray-300 rounded p-1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                        />
                    </div>
                    <button onClick={SignInClick} type="button" className="bg-blue-500 text-white rounded p-2 mt-4 mr-2">Sign in</button>
                    <button onClick={SignUpClick} type="button" className="bg-green-500 text-white rounded p-2 mt-4">Sign up</button>

                    {/* Display TRUE if signed in */}
                    {isSignedIn && (
                        <div className="success">TRUE</div>
                    )}
                </form>
            </div>
        </>
    );
}

export default Signin;
