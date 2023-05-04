import React from 'react';
import { Outlet } from 'react-router-dom';
import CookingHistory from '../CookingHistory/CookingHistory';

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
            <CookingHistory></CookingHistory>
        </div>
    );
};

export default Home;