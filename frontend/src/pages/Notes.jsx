import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/login.css';

const Notes = () => {
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
    }

    return (
        <>
            <div className='text-white'>
                <h1>Notes Will be Displayed here!</h1>
                <div>
                    <button onClick={logout} className="btn bg-blue-500 text-white rounded p-2 mt-4 mr-2">Logout</button>
                </div>
            </div>
            <div>
                <section className="p-5">
                    <div className="text-white mt-10">
                        One thing
                    </div>
                </section>
            </div>
        </>
    )
}

export default Notes