import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipeDescription = () => {
    const singleChef = useLoaderData()
    console.log(singleChef.name);
    return (
        <div>
            
        </div>
    );
};

export default RecipeDescription;