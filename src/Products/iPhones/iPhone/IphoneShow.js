import React from 'react';

const IphoneShow = ({ iphone, setBooked }) => {
    const { title, image } = iphone;
    return (

        <div className="card w-48 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
            </div>
            {/* <button className='btn btn-error'>View All</button> */}
            <label
                htmlFor="booking-modal" className="btn  btn-error"
                onClick={() => setBooked(iphone)}
            >Book Now</label>
        </div>
    );
};

export default IphoneShow;