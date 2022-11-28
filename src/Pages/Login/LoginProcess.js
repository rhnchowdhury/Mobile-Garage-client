import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Login from './Login';

const LoginProcess = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.log(err));
    }

    return (
        <div >
            <h1 className="text-4xl font-bold text-pink-900 text-center my-12">Login Process</h1>
            <div className='card-actions justify-center'>
                <label htmlFor="my-modal-3" className="btn btn-error text-white">Seller Login</label>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold"><Login></Login></h3>
                    </div>
                </div>
                <label htmlFor="my-modal-3" className="btn btn-error text-white">User Login</label>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold"><Login></Login></h3>
                    </div>
                </div>
            </div>
            <div className="divider">OR</div>
            <div className='card-actions justify-center my-14'>
                <button onClick={handleGoogleSignIn} className='btn btn-outline btn-info w-full max-w-xs'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default LoginProcess;