import React from 'react';
import Iphone from '../../Products/iPhones/iPhone/Iphone';
import OnePlus from '../../Products/OnePluses/OnePlus/OnePlus';
import Xiaomi from '../../Products/Xiaomis/Xiaomi/Xiaomi';
import Banner from './Banner/Banner';
import Show from './Shows/Show';

const Home = () => {
    return (
        <div className='m-12'>
            <Banner></Banner>
            <h1 className='text-4xl font-bold'>Categories of used products</h1>
            <div className='grid gap-12 lg:grid-cols-3'>
                <div className='bg-red-300'>

                    <Iphone></Iphone>
                </div>
                <div className='bg-red-600'>
                    <OnePlus></OnePlus>
                </div>
                <div className='bg-red-900'>
                    <Xiaomi></Xiaomi>
                </div>
            </div>
            {/* <h1 className='text-4xl font-bold'>Categories of used products</h1>
            div
            <div>
                <div>
                    <h4>One Plus</h4>
                    <OnePlus></OnePlus>
                </div>
                <div>
                    <h4>Xiaomi</h4>
                    <Xiaomi></Xiaomi>
                </div>
                <Iphone></Iphone>
            </div> */}

        </div>
    );
};

export default Home;