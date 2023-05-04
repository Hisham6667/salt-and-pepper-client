import React from 'react';
import Error from '../components/Error/Error';
import Main from '../components/Layout/Main';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import { createBrowserRouter } from 'react-router-dom';
import AllChef from '../components/AllChef/AllChef';
import Blog from '../components/Blog/Blog';
import ChefDetails from "../components/ChefDetails/ChefDetails";
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        element: <AllChef></AllChef>,
                        loader: () => fetch('http://localhost:5000/allchef')
                    }
                ]
            },
        ]
    },
    {
        path: '/chef/:id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/allchef/${params.id}`)
    },
    {
        path: '/blogs',
        element: <Blog></Blog>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default router;