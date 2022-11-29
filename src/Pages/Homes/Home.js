import React from 'react';
import Banner from './Banner/Banner';
import Optional from './Optionals/Optional';

const Home = () => {
    return (
        <div className='m-12'>
            <Banner></Banner>
            {/* <Iphone></Iphone> */}
            <Optional></Optional>

        </div>
    );
};

export default Home;