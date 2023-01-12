import React from 'react';
import slider1 from '../../../assets/slider/slider1.png';
import slider2 from '../../../assets/slider/slider2.jpg';

const Banner = () => {

    return (
        <div className="carousel mt-5 lg:w-full bg-red-100 rounded-xl">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="hero">
                    <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                        <img src={slider1} alt='' className="max-w-sm lg:max-w-sm rounded-lg shadow-2xl" />
                        <div className='mr-20'>
                            <h1 className=" text-4xl font-bold mb-4 mt-2">Are You Ready For<br />Perfect Phone?</h1>
                            <p className="text-xl font-medium">Get Flat 10% off an all Items Phones.</p>
                            <p className="text-xl font-medium">Use Codes All10</p>
                            <button className="btn btn-secondary bg-orange-600 mt-4">Explore Now</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-orange-600">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-orange-600">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="hero">
                    <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                        <img src={slider2} alt='' className="max-w-sm lg:max-w-sm rounded-lg shadow-2xl" />
                        <div className='mr-28'>
                            <h1 className=" text-4xl font-bold mb-4 mt-2">Sell Your Old Phone<br />at the Best Price</h1>
                            <p className="text-xl font-medium">Free Pickup | Instant Cash</p>
                            <button className="btn btn-secondary bg-orange-600 mt-4">Sell Now</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle bg-orange-600">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-orange-600">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;