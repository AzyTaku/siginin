// import { API_URL } from "../api";
const API_URL = "http://127.0.0.1:5100" || window.location.origin;
console.log("API_URL is ", API_URL)

export class NotesService {
    //create notes
    async createNote(name, description) {
        console.log("name :", name, " Des : ", description)
        const note = JSON.stringify({ name, description });
        try {
            const response = await fetch(`${API_URL}/api/item/item`, {
                method: "POST",
                body: note,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Failed to create note:", error);
            throw error;
        }
    }

    //get all notes
    async getAllNotes() {
        try {
            const response = await fetch(`${API_URL}/api/item/items`);

            if (!response.ok) {
                throw new Error(`Failed to fetch notes: ${response.statusText}`);
            }
            console.log("Response : ", response)
            return await response.json();
        } catch (error) {
            console.error("Error fetching notes:", error);
            throw error;
        }
    }

    //Update note
    async updateNote(noteId, updatedData) {
        const note = JSON.stringify(updatedData);
        try {
            const response = await fetch(`${API_URL}/api/${noteId}/item`, {
                method: "PUT",
                body: note,
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Failed to update note: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Error updating note:", error);
            throw error;
        }
    }

    //Delete note 
    async deleteNote(noteId) {
        console.log("Note Id :", noteId)
        try {
            const response = await fetch(`${API_URL}/api/item/${noteId}/delete`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error(`Failed to delete note: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("Error deleting note:", error);
            throw error;
        }
    }
}

export const notesService = new NotesService()