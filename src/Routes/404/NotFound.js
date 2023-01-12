import React from 'react';
import image from '../../assets/404/four.webp';
import useTitle from '../../Hooks/useTitle';

const NotFound = () => {
    useTitle('ErrorPage');
    return (
        <div className='m-16'>
            <h1 className='text-2xl font-bold  text-pink-900 mb-5'>404 Not Found</h1>
            <p className='text-lg font-medium mb-8'>The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot. <br /> <br /> A 404 status code only indicates that the resource is missing: not whether the absence is temporary or permanent. If a resource is permanently removed, use the 410 (Gone) status instead. </p>
            <img className="mask mask-parallelogram" src={image} alt='' />
        </div>
    );
};

export default NotFound;