import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <Link to="/">
                <h1 className='text-5xl text-red-600'>Error</h1>
            </Link>
        </div>
    );
};

export default Error;