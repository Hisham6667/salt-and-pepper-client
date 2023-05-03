import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Oops! 404 Error</h1>
            <p className="text-lg text-gray-600 mb-6">Sorry, the page you are looking for does not exist.</p>
            <Link to='/' className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                Go back to homepage
            </Link>
        </div>
    );
};

export default Error;