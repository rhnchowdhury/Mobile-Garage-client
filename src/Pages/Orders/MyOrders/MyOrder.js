import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);

    const url = `https://mobile-garage-server-ten.vercel.app/booking?email=${user?.email}`;

    const { data: booking = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h1 className='text-2xl font-bold  text-pink-900 text-center my-12'>My Orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Phone Name</th>
                            <th>Picture</th>
                            <th>Price</th>
                            <th>Pay Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((books, i) => <tr key={books._id}>
                                <th>{i + 1}</th>
                                <td>{books.phoneName}</td>
                                <td><img src={books.phoneImg} className='w-20' alt='' /></td>
                                <td>{books.phonePrice}</td>
                                <Link to='/dashboard/payment'> <button className='btn btn-outline mt-2'>Payment</button></Link>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;