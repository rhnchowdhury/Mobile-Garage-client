
import React, { useEffect, useState } from 'react';
import MyProductShow from './MyProductShow';

const MyProduct = () => {
    const [catchs, setCatchs] = useState([]);
    useEffect(() => {
        fetch(`mobile.json`)
            .then(res => res.json())
            .then(data => setCatchs(data))
            .catch(error => (console.log(error)));
    }, [])
    // const { data: products = [] } = useQuery({
    //     queryKey: [],
    //     // queryFn: () => fetch('http://localhost:5000/phone')
    //     queryFn: () => fetch('mobile.json')
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // });

    return (
        <div className='mt-8'>
            <h1 className='text-2xl font-bold  text-pink-900 text-center'>My Products</h1>
            <h3 className='text-lg font-bold  text-pink-500 mt-5'>Available Products For Sell</h3>
            <div>
                {/* {
                    products.map(product => <MyProductShow key={product.id} product={product}></MyProductShow>)
                } */}
                {
                    catchs.map(phone => <MyProductShow key={phone.id} phone={phone}></MyProductShow>)
                }
            </div>
        </div>
    );
};

export default MyProduct;