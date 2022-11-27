import { useQuery } from '@tanstack/react-query';
import React from 'react';
import XiaomiShow from './XiaomiShow';

const Xiaomi = () => {
    const { data: Xiaomis = [] } = useQuery({
        queryKey: [],
        queryFn: () => fetch('http://localhost:5000/xiaomi')
            .then(res => res.json())
    });
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            {
                Xiaomis.map(xia => <XiaomiShow key={xia._id} xia={xia}></XiaomiShow>)
            }
            <div className='content-center items-center'>
                <button className='btn btn-error'>View All</button>
            </div>
        </div>
    );
};

export default Xiaomi;