import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../Bookings/BookModal';
import PhoneShow from './PhoneShow';

const Phone = () => {
    const phones = useLoaderData();
    const [booked, setBooked] = useState(null);

    return (
        <section className='lg:m-12'>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3'>
                {
                    phones.map(phone => <PhoneShow key={phone._id} phone={phone} setBooked={setBooked}></PhoneShow>)
                }
            </div>
            {booked &&
                <BookModal
                    booked={booked}
                    setBooked={setBooked}
                ></BookModal>
            }
        </section>
    );
};

export default Phone;