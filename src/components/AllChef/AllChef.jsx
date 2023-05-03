import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const AllChef = () => {
    const allChef = useLoaderData()
    return (
        <div>
            total chefs: {allChef.length}
            {
                allChef.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
            }
        </div>
    );
};

export default AllChef;