import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { register, handleSubmit } = useForm();
    const handleSignUp = data => {
        console.log(data);
    }
    return (
        <div className='flex justify-center items-center my-20'>
            <div>
                <h1 className="text-4xl font-bold text-center">Sign Up!</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div>
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type='text' {...register("name")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='text' {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-active mt-4 w-full max-w-xs' value='Sign Up' type="submit" />
                    <p>Already have an account? <Link to='/login' className='text-accent font-bold'>Please Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;