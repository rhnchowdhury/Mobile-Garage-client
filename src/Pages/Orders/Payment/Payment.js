import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Payment = () => {
    useTitle("Payment");
    return (
        <div className='mt-5'>
            <h1 className='text-orange-600'>This is payment page</h1>
        </div>
    );
};

export default Payment;