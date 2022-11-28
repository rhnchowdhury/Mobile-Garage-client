import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import IphoneShow from './IphoneShow';

const Iphone = () => {
    const { data: iphones = [] } = useQuery({
        queryKey: [],
        queryFn: () => fetch('http://localhost:5000/phone')
            .then(res => res.json())
    });
    return (
        <section>
            <h1>iPhone</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                {
                    iphones.map(iphone => <IphoneShow key={iphone._id} iphone={iphone}></IphoneShow>)
                    // iphones.slice(0, 1)
                }
                <div className='card-actions justify-center ml-44'>
                    <Link to='/iphone'>
                        <button className='btn btn-error'>View All</button>
                    </Link>
                </div>
                {/* <button className='btn btn-error'>View All</button> */}

            </div>
        </section>
    );
};

export default Iphone;