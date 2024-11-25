import React from 'react';
import '../index.css';

const NoteComponent = () => {
    const notes = [
        {
            title: "Title 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Title 2",
            content: "Here is notes"
        },
        {
            title: "Title 3",
            content: "Here is notes"
        },
        {
            title: "Title 4",
            content: "Here is notes"
        },
        {
            title: "Title 5",
            content: "Here is notes"
        },
        {
            title: "Title 6",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "Title 7",
            content: "Here is notes"
        },
        {
            title: "Title 8",
            content: "Here is notes"
        }
    ];

    return (
        <section className="flex flex-wrap justify-center gap-4">
            {notes.map((note, index) => (
                <div key={index} className="w-64 h-64 bg-white border border-gray-300 shadow-lg rounded-lg flex flex-col justify-start items-center p-4">
                    <h1 className="text-lg font-bold text-gray-800 mb-4">{note.title}</h1> {/* Display title */}
                    <p className="text-sm text-gray-600 text-center overflow-y-auto max-h-32">{note.content}</p> {/* Display content */}
                </div>
            ))}
        </section>
    );
};

export default NoteComponent;
