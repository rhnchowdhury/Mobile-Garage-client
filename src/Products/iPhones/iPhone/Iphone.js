import { useQuery } from '@tanstack/react-query';
import React from 'react';
import IphoneShow from './IphoneShow';

const Iphone = () => {
    const { data: products = [] } = useQuery({
        queryKey: [],
        queryFn: () => fetch('http://localhost:5000/phone')
            .then(res => res.json())
    });

    return (
        <section>
            <h1 className='text-2xl font-bold  text-pink-900 text-center mt-8'>Phone Category</h1>
            <div className='grid gap-3 grid-cols-1 lg:grid-cols-3 m-12'>
                {
                    products.slice(0, 3).map(product => <IphoneShow key={product._id} product={product}></IphoneShow>)
                }
            </div>
        </section>
    );
};

export default Iphone;