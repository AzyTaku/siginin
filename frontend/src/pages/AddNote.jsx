import React, { useState } from 'react'
import '../index.css';
import { notesService } from '../services/notesService';
import { Navigate, useNavigate } from 'react-router-dom';

const AddNote = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleAddNote = async (event) => {
        event.preventDefault();

        // Form validation
        if (!name || !description) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const response = await notesService.createNote(name, description);

            // Handle success
            console.log("Note added:", response);
            setName('')
            setDescription('')
        } catch (error) {
            console.error("Error adding product:", error);
            alert("Error adding product! Please try again later.");
        }
    };

    const handleBack = () => {
        navigate('/Notes')
    }

    return (
        <>
            <div className="flex flex-col items-center w-full p-6 bg-gray-100 rounded-lg shadow-lg">
                <div className="text-center mb-6">
                    <p className="text-xl font-semibold text-gray-700">Add Notes Here [Remember Notes are universal]</p>
                </div>
                <form className="flex flex-col gap-4 w-full max-w-md">
                    <div className="flex flex-col">
                        <label htmlFor="Name" className="text-sm font-medium text-gray-600 mb-1">Name:</label>
                        <input
                            type="text"
                            id="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter note name"
                            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Des" className="text-sm font-medium text-gray-600 mb-1">Description:</label>
                        <textarea
                            id="Des"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Enter note description"
                            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows="4"
                        ></textarea>
                    </div>
                    <button
                        onClick={handleAddNote}
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
                    >
                        Add Note
                    </button>
                    <button
                        onClick={handleBack}
                        className="w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
                    >
                        Back
                    </button>
                </form>
            </div>

        </>
    )
}

export default AddNote