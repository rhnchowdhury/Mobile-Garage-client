import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import IphoneAllShow from './IphoneAllShow';

const IphoneAll = () => {
    const { loading } = useContext(AuthContext)
    const { data: phones = [] } = useQuery({
        queryKey: [],
        queryFn: () => fetch('http://localhost:5000/iphoneAll')
            .then(res => {
                res.json()
                // if (loading) {
                //     return <progress className="progress w-56"></progress>
                // }
            })
            .then(data => console.log(data))

    })
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            <h1>this is all path</h1>
            {
                phones.map(phone => <IphoneAllShow key={phone._id} phone={phone}></IphoneAllShow>)
            }
        </div>
    );
};

export default IphoneAll;