import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-[100vh] w-full flex flex-col text-4xl items-center justify-center'>
            <h1>Page Not Found</h1>
            <Link to="/">Click here to go Home Page</Link>
        </div>
    );
};

export default Error;