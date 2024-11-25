import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { services } from "../services/services.jsx";
import '../index.css'

export function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const SignInClick = (e) => {
        e.preventDefault();
        setIsSignedUp(false);
        setErrorMessage('');

        if (!email || !password) {
            setErrorMessage('Please enter both email and password to sign in.');
            return;
        }

        services.Signin(email, password).then((response) => {
            if (response === true) {
                console.log("Sign in True:", response, "For:", email, password);
                setIsSignedIn(true);
                navigate('/Notes');
            } else {
                console.log("Sign in Failed");
            }
        });
    };

    const SignUpClick = (e) => {
        e.preventDefault();
        setIsSignedIn(false);
        setErrorMessage('');

        if (!email || !password) {
            setErrorMessage('Please enter both email and password to sign up.');
            return;
        }

        services.Signup(email, password).then((response) => {
            if (response === true) {
                console.log("Signup is True:", response, "For:", email, password);
                setIsSignedUp(true);
            } else {
                console.log("Sign up Failed");
            }
        });
    };

    const Clear = () => {
        setEmail('');
        setPassword('');
        setIsSignedIn(false);
        setIsSignedUp(false);
        setErrorMessage('');
    };

    return (
        <>
            <div className="flex justify-center item-center py-16 max-w-md w-full">
                <form className="bg-white p-6 rounded-lg shadow-md w-[500px] ">
                    <h4 className="text-center text-xl mb-8 text-black font-bold">Sign In</h4>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm">Email:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded p-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="pass" className="block text-sm">Password:</label>
                        <input
                            type="password"
                            id="pass"
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded p-2"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex gap-2 mb-4">
                        <button onClick={SignInClick} type="button" className="bg-blue-500 text-white rounded p-2 w-full">Sign In</button>
                        <button onClick={SignUpClick} type="button" className="bg-green-500 text-white rounded p-2 w-full">Sign Up</button>
                    </div>

                    <button onClick={Clear} type="button" className="bg-gray-500 text-white rounded p-2 w-full">Clear</button>
                </form>
            </div>

            {/* Display Error or Success Messages */}
            {errorMessage && <div className="text-red-500 text-center mt-4">{errorMessage}</div>}
            {isSignedIn && <div className="text-green-500 text-center mt-4">Sign In Successful</div>}
            {isSignedUp && <div className="text-green-500 text-center mt-4">Sign Up Successful</div>}
        </>
    );
};

export default Signin;
