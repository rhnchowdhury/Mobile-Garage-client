import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddProducts from '../../Layouts/DashBoard/AddProducts/AddProducts';
import MyProduct from '../../Layouts/DashBoard/MyProducts/MyProduct';
import DashboardLayout from '../../Layouts/DashboardLayout/DashboardLayout';
import Main from '../../Layouts/Main';
import Blog from '../../Pages/Blogs/Blog/Blog';
import Home from '../../Pages/Homes/Home';
import LoginProcess from '../../Pages/Login/LoginProcess';
import SignUp from '../../Pages/Login/SignUp';
import MyOrder from '../../Pages/Orders/MyOrders/MyOrder';
import Payment from '../../Pages/Orders/Payment/Payment';
import Phone from '../../Pages/Phones/Phone';
import NotFound from '../404/NotFound';
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
                path: '/phone/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/phone/${params.id}`)
                },
                element: <Phone></Phone>
            },
            {
                path: "/*",
                element: <NotFound></NotFound>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/payment',
                element: <Payment></Payment>
            },
            {
                path: '/dashboard/add',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/products',
                element: <MyProduct></MyProduct>
            }

        ]
    }
]);
