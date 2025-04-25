import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const Error = () => {
    return (
        <>
            <Helmet>
                <title>Error</title>
                <meta name="description" content="Error page" />
                <link rel="canonical" href="/error" />
                <style>{`body { background-color: #f0f0f0; }`}</style>
            </Helmet>
            <div className='flex items-center flex-col gap-5 justify-center min-h-screen bg-gray-100'>
                <Link to="/">
                    <h1 className='text-5xl text-red-600'>Error</h1>
                </Link>
                <p className='text-2xl text-gray-700 text-center'>Something went wrong. <br /> Please try again later.</p>
                <Link to="/">
                    <button className='btn mt-4 px-10 py-6 bg-green-500 text-white rounded'>Go to Home</button>
                </Link>
            </div>
        </>
    );
};

export default Error;