import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Blog from '../../Pages/Blogs/Blog/Blog';
import Dash from '../../Pages/Dash';
import Home from '../../Pages/Homes/Home';
import LoginProcess from '../../Pages/Login/LoginProcess';
import SignUp from '../../Pages/Login/SignUp';
import IphoneAll from '../../Products/iPhones/Alliphones/IphoneAll';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <LoginProcess></LoginProcess>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/iphone',
                element: <IphoneAll></IphoneAll>
            }
        ]
    },
    {
        path: '/dash',
        element: <PrivateRoute><Dash></Dash></PrivateRoute>
    }
]);
