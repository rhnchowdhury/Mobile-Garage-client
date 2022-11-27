import React from 'react';
import Iphone from '../../../Products/iPhones/iPhone/Iphone';
import OnePlus from '../../../Products/OnePluses/OnePlus/OnePlus';
import Xiaomi from '../../../Products/Xiaomis/Xiaomi/Xiaomi';

const Show = () => {
    return (
        <section className='mt-12'>
            <h1 className='text-4xl font-bold'>Categories of used products</h1>
            <div className='grid grid-cols-1  lg:grid-cols-3'>
                <Iphone></Iphone>
                <OnePlus></OnePlus>
                <Xiaomi></Xiaomi>

            </div>
        </section >
    );
};

export default Show;