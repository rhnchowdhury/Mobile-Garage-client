import { useQuery } from '@tanstack/react-query';
import React from 'react';
import OnePlusShow from './OnePlusShow';

const OnePlus = () => {
    const { data: pluses = [] } = useQuery({
        queryKey: [],
        queryFn: () => fetch('http://localhost:5000/plus')
            .then(res => res.json())
    });
    return (

        <div className='grid grid-cols-1 lg:grid-cols-2'>
            {
                pluses.map(plus => <OnePlusShow key={plus._id} plus={plus}></OnePlusShow>)
            }
            <div className='content-center items-center'>
                <button className='btn btn-error'>View All</button>
            </div>
        </div>
    );
};

export default OnePlus;