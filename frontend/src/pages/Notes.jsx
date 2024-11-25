import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import { services } from '../services/services';
import NoteComponent from '../components/NoteComponent';

const Notes = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);

    useEffect(() => {
        const fetchToken = async () => {
            const tk = await services.getToken();
            console.log("Token fetched:", tk);
            if (!tk) {
                navigate("/"); // Redirect if no token
            } else {
                setToken(tk);
            }
        };

        fetchToken();
    }, [navigate]);

    const logout = () => {
        services.logout();
        navigate('/');
    };

    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="text-center p-6">
                    <p className="text-lg mb-4">Notes Will be Displayed here!</p>
                    <NoteComponent />
                </div>
            </div>

            <div className="flex justify-center items-center mt-4">
                <button
                    onClick={logout}
                    className="bg-blue-500 text-white rounded p-2"
                >
                    Logout
                </button>
            </div>
        </>
    );
};

export default Notes;
