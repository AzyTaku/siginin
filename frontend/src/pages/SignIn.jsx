import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import '../assets/login.css';
import { services } from "../services/services.jsx";

export function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const SignInClick = (e) => {
        e.preventDefault(); // Prevent form submission
        setIsSignedUp(false);
        setErrorMessage('');

        // Check for empty fields
        if (!email || !password) {
            setErrorMessage('Please enter both email and password to sign in.');
            return;
        }

        services.Signin(email, password).then(function (response) {
            console.log("Sign in True : ", response, " For : ", email, password);
            setIsSignedIn(true)
            // navigate('/Notes')
        });
    };

    const SignUpClick = (e) => {
        e.preventDefault(); // Prevent form submission
        setIsSignedIn(false);
        setErrorMessage('');

        // Check for empty fields
        if (!email || !password) {
            setErrorMessage('Please enter both email and password to sign up.');
            return;
        }

        services.Signup(email, password).then(function (response) {
            console.log("Signup is True : ", response, " For :", email, password);
            setIsSignedUp(true);
        });
    };

    const Clear = (e) => {
        setEmail('');
        setPassword('');
        setIsSignedIn(false)
        setIsSignedUp(false)
        setErrorMessage('')
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form className="bg-white p-8 rounded-lg shadow-md w-96">
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
                            className="text_input w-full border border-gray-300 rounded p-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            required
                        />
                    </div>
                    <div className="text-black mr-10">
                        <label htmlFor="pass" className="email">Password:</label>
                        <input
                            type="password"
                            name="pass"
                            id="pass"
                            placeholder="Input Password"
                            className="text_input w-full border border-gray-300 rounded p-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                            required />
                    </div>
                    <button onClick={SignInClick} type="button" className="btn bg-blue-500 text-white rounded p-2 mt-4 mr-2">Sign in</button>
                    <button onClick={SignUpClick} type="button" className="btn bg-green-500 text-white rounded p-2 mt-4">Sign up</button>
                    <button onClick={Clear} type="button" className="btn bg-green-500 text-white rounded p-2 mt-4">Clear</button>

                </form>
            </div>
            {/* Display Error Message */}
            {errorMessage && (
                <div className="error">{errorMessage}</div>
            )}

            {/* Display TRUE if signed in */}
            {isSignedIn && (
                <div className="success">Sign in Successful</div>
            )}
            {isSignedUp && (
                <div className="success">Sign up Successful</div>
            )}
        </>
    );
}

export default Signin;
