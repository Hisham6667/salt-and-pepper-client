import React from 'react';
import { Outlet } from 'react-router-dom';
import CookingHistory from '../CookingHistory/CookingHistory';
import MealPlan from '../MealPlan/MealPlan';

const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
            <CookingHistory></CookingHistory>
            <MealPlan></MealPlan>
        </div>
    );
};

export default Home;