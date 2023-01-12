import React from 'react';
import { Link } from 'react-router-dom';

const IphoneShow = ({ product }) => {
    const { category, title, image } = product;

    return (
        <div className="card lg:w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl w-48" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
            </div>
            <div className='card-actions justify-center py-3'>
                <Link to={`/phone/${category}`}><button className='btn btn-error bg-orange-600'>View All</button></Link>
            </div>
        </div>
    );
};

export default IphoneShow;