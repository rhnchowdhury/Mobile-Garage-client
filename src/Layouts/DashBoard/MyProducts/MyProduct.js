import React, { useEffect, useState } from 'react';
import useTitle from '../../../Hooks/useTitle';
import MyProductShow from './MyProductShow';

const MyProduct = () => {
    const [products, setProducts] = useState([]);
    useTitle('MyProducts');

    useEffect(() => {
        fetch('https://mobile-garage-server-ten.vercel.app/phone')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='lg:m-12'>
            <h1 className='text-2xl font-bold  text-orange-600 text-center'>My Products</h1>
            <h3 className='text-lg font-bold  text-orange-600 mt-5'>Available Products For Sell</h3>
            <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 m-8'>
                {
                    products.map(product => <MyProductShow key={product._id} product={product}></MyProductShow>)
                }
            </div>
        </div>
    );
};

export default MyProduct;