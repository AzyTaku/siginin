import { useState } from 'react';
import '../index.css';
import { notesService } from '../services/notesService';

const NoteComponent = ({ notes }) => {
    console.log("Notes Passed : ", notes)
    const notesOld = [
        {
            name: "Title 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Title 2",
            description: "Here is notes"
        },
        {
            name: "Title 3",
            description: "Here is notes"
        },
        {
            name: "Title 4",
            description: "Here is notes"
        },
        {
            name: "Title 5",
            description: "Here is notes"
        },
        {
            name: "Title 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            name: "Title 7",
            description: "Here is notes"
        },
        {
            name: "Title 8",
            description: "Here is notes"
        }
    ];

    const onDelete = async (noteId) => {
        try {
            await notesService.deleteNote(noteId);
        } catch (error) {
            console.error("Error deleting note:", error);
            alert("Error Deleting Note : ", error)
        }
    };

    return (
        <section className="flex flex-wrap justify-center gap-4">
            {notes.map((note, index) => (
                <div
                    key={note._id || index}
                    className="relative w-64 h-64 bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col justify-start items-center p-4"
                >
                    <button
                        className="absolute top-2 right-2 bg-red-500 text-white text-sm rounded-full px-3 py-1 hover:bg-red-600"
                        onClick={() => onDelete(note._id)}
                    >
                        Delete
                    </button>
                    <h1 className="text-lg font-bold text-gray-800 mb-4">{note.name}</h1>
                    <p className="text-sm text-gray-600 text-center overflow-y-auto max-h-32">
                        {note.description}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default NoteComponent;
