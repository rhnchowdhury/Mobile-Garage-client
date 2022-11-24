import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Blog from '../../Pages/Blogs/Blog/Blog';
import Home from '../../Pages/Homes/Home';

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
            }
        ]
    }
]);
