import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import { services } from '../services/services';
import NoteComponent from '../components/NoteComponent';
import { notesService } from '../services/notesService';

const Notes = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const fetchedNotes = await notesService.getAllNotes();
                setNotes(fetchedNotes);
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        };
        fetchNotes();
    }, []);

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

    const AddNote = () => {
        navigate('/AddNote')
    }

    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="text-center p-6">
                    <p className="text-lg mb-4">Notes Will be Displayed here!</p>
                    <NoteComponent notes={notes} />
                </div>
            </div>

            <div className="flex justify-center items-between space-x-3 mt-4">
                <button
                    onClick={logout}
                    className="bg-blue-500 text-white rounded p-2"
                >
                    Logout
                </button>
                <button
                    onClick={AddNote}
                    className="bg-blue-500 text-white rounded p-2"
                >
                    Add Note
                </button>
            </div>
        </>
    );
};

export default Notes;
