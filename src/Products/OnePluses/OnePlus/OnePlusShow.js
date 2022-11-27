import React from 'react';

const OnePlusShow = ({ plus }) => {
    const { title, image } = plus;
    return (

        <div className="card w-48 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
            </div>
        </div>

    );
};

export default OnePlusShow;