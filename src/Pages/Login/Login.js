import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h1 className="text-4xl font-bold text-center">Login now!</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='text' {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password")} className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget password?</span></label>
                    </div>
                    <input className='btn btn-active w-full max-w-xs' value='Login' type="submit" />
                    <p>New to mobile garage? <Link to='/signup' className='text-accent font-bold'>Create an account</Link></p>
                </form>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full max-w-xs'>CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;