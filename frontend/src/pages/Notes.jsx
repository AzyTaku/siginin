import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/login.css';

const Notes = () => {
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
    }

    return (
        <div className='text-white krona'>
            Notes Will be Displayed here!
            <div>
                <button onClick={logout} className="btn bg-blue-500 text-white rounded p-2 mt-4 mr-2">Logout</button>
            </div>
        </div>
    )
}

export default Notes