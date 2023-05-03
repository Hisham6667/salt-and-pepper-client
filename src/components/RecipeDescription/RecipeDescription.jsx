import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const RecipeDescription = () => {
    const singleChef = useLoaderData()
    console.log(singleChef.name);
    return (
        <div className='lg:container mx-auto'>
            <Navigation></Navigation>
        </div>
    );
};

export default RecipeDescription;