import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const RecipeDescription = () => {
    const singleChef = useLoaderData()
    console.log(singleChef.name);
    return (
        <div className='lg:container mx-auto'>
            <Navigation></Navigation>
            <div className="h-screen"></div>
            <Footer></Footer>
        </div>
    );
};

export default RecipeDescription;