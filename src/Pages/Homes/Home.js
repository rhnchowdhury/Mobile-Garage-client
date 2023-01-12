import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Iphone from '../../Products/iPhones/iPhone/Iphone';
import Banner from './Banner/Banner';
import Optional from './Optionals/Optional';

const Home = () => {
    useTitle('Home');
    return (
        <div className='lg:m-12'>
            <Banner></Banner>
            <Iphone></Iphone>
            <Optional></Optional>


        </div>
    );
};

export default Home;