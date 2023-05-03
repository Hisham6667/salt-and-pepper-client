import React, { useState } from 'react';
import logo from '/food.svg'
import './RecipeDescription.css'
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaBookmark } from "react-icons/fa";

const RecipeDescription = ({ recipe }) => {

    const { name, ingredients, method, rating } = recipe;

    return (
        <div id='recipeCard' className="card w-full">
            <figure className='w-28 mt-5 mx-auto'>
                <img className='w-full' src={logo} alt="chef image" />
            </figure>
            <div className="card-body">
                <p className='mb-4 max-h-16 h-16 py-3 rounded-lg border-dashed border-black border-y-2 text-center text-3xl uppercase'>{name}</p>
                <div className='flex flex-col justify-between h-full'>
                    <p className='text-justify text-lg my-5'>{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</p>
                    <p className='text-justify text-sm my-5'>{method}</p>
                    <div className='flex justify-between items-center bg-white py-3 px-2 border border-amber-700 rounded-xl'>
                        <div className='flex items-center'>
                            <Rating className='mt-1'
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar className='text-amber-500 text-xl' />}
                                placeholderSymbol={<FaStar className='text-amber-500 text-xl' />}
                                fullSymbol={<FaStar className='text-amber-500 text-xl' />}
                            />
                            <p className='text-xl uppercase ml-2'>{rating}</p>
                        </div>
                        <button className='flex items-center justify-center p-2 border border-amber-700 rounded-lg text-amber-600'>Save Recipe<FaBookmark className='mx-2 text-red-500'/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDescription;