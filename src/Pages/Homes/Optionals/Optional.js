import React from 'react';
import phone1 from '../../../assets/optional/phone1.jpg'
import phone2 from '../../../assets/optional/phone2.jpg'
import phone3 from '../../../assets/optional/phone3.webp'

const Optional = () => {

    return (
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 mt-12'>
            <div className="hero bg-orange-300 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={phone1} alt='' className="w-16 rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-6 font-medium text-white">Get 5% Extra Value for Your Phone with Flipkart Voucher</p>
                        <button className="btn btn-outline btn-ghost">View All</button>
                    </div>
                </div>
            </div>
            <div className="hero bg-indigo-400 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={phone2} alt='' className="w-20 rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-6 font-medium text-white">Trade-in your old phone for latest one Plus and Get Tk 2000 Now!</p>
                        <button className="btn btn-outline btn-ghost">View All</button>
                    </div>
                </div>
            </div>
            <div className="hero bg-blue-400 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={phone3} alt='' className="w-24 h-40 rounded-lg shadow-2xl" />
                    <div>
                        <p className="py-6 font-medium text-white">Get Your Dream Phone on easy EMI using Tata Voucher</p>
                        <button className="btn btn-outline btn-ghost">View All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Optional;