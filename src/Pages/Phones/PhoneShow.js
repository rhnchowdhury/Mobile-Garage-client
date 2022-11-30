import React from 'react';

const PhoneShow = ({ phone, setBooked }) => {
    const { title, image, name, post, price, selling, address, years } = phone;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p><strong>Original Price: </strong>${price}</p>
                <p><strong>Resale Price: </strong>${selling}</p>
                <p><strong>Seller's Name: </strong>{name}</p>
                <p><strong>Address: </strong>{address}</p>
                <p><strong>Years Of Use: </strong>{years}</p>
                <p><strong>Posted Date: </strong>{post}</p>
                <div className="card-actions">
                    <label
                        htmlFor="booking-modal" className="btn  btn-error"
                        onClick={() => setBooked(phone)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default PhoneShow;