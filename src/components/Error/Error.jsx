import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '/error.webp'
import { AuthContext } from '../../Providers/AuthProvider';

const Error = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <progress className="progress progress-warning w-52"></progress>
        </div>
    }

    return (
        <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
            <img className='w-52 rounded-full mb-5' src={logo} alt="" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Oops! 404 Error</h1>
            <p className="text-lg text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link to='/' className="bg-amber-500 active:bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded">
                Go back to homepage
            </Link>
        </div>
    );
};

export default Error;