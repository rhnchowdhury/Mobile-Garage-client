import React from 'react';

const MyProductShow = ({ product }) => {
    const { title, image, selling, years } = product;

    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p><strong>Selling Price: </strong>${selling}</p>
                <p><strong>Use of years: </strong>{years}</p>
                <div className="card-actions">
                    <button className="btn btn-error">Add for Advertisement</button>
                </div>
            </div>
        </div>
    );
};

export default MyProductShow;