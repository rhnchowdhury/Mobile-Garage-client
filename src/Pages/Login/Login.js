import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import useToken from '../../Hooks/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState((''));
    const [token] = useToken(loginUserEmail);
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');
    const from = location.state?.from?.pathname || "/";

    if (token) {
        navigate(from, { replace: true })
    }

    const handleLogin = (data, e) => {
        console.log(data);
        e.target.reset();
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setLoginUserEmail(data.email);
            })
            .catch(err => {
                console.log(err)
                setLoginError(err.message);
            });
    };

    return (
        <div className='flex justify-center items-center my-20'>
            <div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type='text' {...register("name",
                            {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='text' {...register("email",
                            {
                                required: "Email address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div>
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget password?</span></label>
                    </div>
                    <input className='btn btn-active w-full max-w-xs' value='Login' type="submit" />
                    {loginError && <p className='text-error'>{loginError}</p>}
                    <p>New to mobile garage? <Link to='/signup' className='text-orange-600 font-bold'>Create an account</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Login;