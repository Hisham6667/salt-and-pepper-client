import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';
import { GiBarbedStar, GiJewelCrown } from "react-icons/gi";

const AllChef = () => {
    const allChef = useLoaderData()
    return (
        <div className="card card-compact w-11/12 mx-auto bg-base-100 shadow-lg mb-10 border border-dashed border-amber-600 rounded-none">

            <div className='rounded-b-lg flex flex-col mb-4 border-b-2 border-dotted border-amber-600'>
                <div className='flex justify-between items-center'>
                    <GiBarbedStar className='text-5xl mx-5 text-amber-500' />
                    <GiJewelCrown className='text-7xl text-amber-500' />
                    <GiBarbedStar className='text-5xl mx-5 text-amber-500' />
                </div>
                <div className='flex justify-between items-center'>
                    <GiBarbedStar className='text-5xl mx-5 text-amber-500' />
                    <div className='text-3xl my-4 text'>{allChef.length} GREATEST CHEFS OF ALL TIME</div>
                    <GiBarbedStar className='text-5xl mx-5 text-amber-500' />
                </div>
            </div>

            <div className="card-body grid grid-cols-2 gap-8 mb-8">
                {
                    allChef.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </div>

        </div>
    );
};

export default AllChef;