import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import RecipeDescription from '../RecipeDescription/RecipeDescription';
import { GiBeveledStar, GiForkKnifeSpoon } from "react-icons/gi";

const ChefDetails = () => {

    const singleChef = useLoaderData()
    const { picture_url, name, specialty, description, likes, number_of_recipes, years_of_experience, recipes } = singleChef;



    return (
        <div className='lg:container mx-auto'>

            <Navigation></Navigation>

            <div className="min-h-screen">

                <div className="card w-11/12 h-96 image-full mx-auto mb-16">
                    <figure className=''>
                        <img className='w-full' src={picture_url} alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center w-full mb-3'>
                            <div className='w-2/6 h-40'>
                                <img className='w-56 h-full rounded-2xl' src={picture_url} alt="" />
                            </div>
                            <div className='w-full'>
                                <p className='text-amber-500 text-7xl uppercase border-amber-500 border-dashed border-b-2 border-t-2 text-center py-3 mx-auto rounded-lg mb-2'>{name}</p>
                                <div className='flex justify-around items-center'>
                                    <GiBeveledStar className='text-white text-2xl mx-10' />
                                    <p className='text-2xl text-center'><i>FAMOUS AS <span className='text-amber-500'>{specialty}</span></i></p>
                                    <GiBeveledStar className='text-white text-2xl mx-10' />
                                </div>
                            </div>
                        </div>
                        <p className='flex justify-between w-full text-xl text-justify mb-3'>{description}</p>
                        <div className='flex justify-between w-full'>
                            <div className='flex justify-center items-center'>
                                <GiBeveledStar className='text-amber-400 text-xl mx-3' />
                                <p className='text-white text-center uppercase'>his cooks made him get <span className='text-amber-400'>{likes}</span> likes</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <GiBeveledStar className='text-amber-400 text-xl mx-3' />
                                <p className='text-white text-center uppercase'>he has <span className='text-amber-400'>{number_of_recipes}</span> recipes to show off</p>
                            </div>
                            <div className='flex justify-center items-center'>
                                <GiBeveledStar className='text-amber-400 text-xl mx-3' />
                                <p className='text-white text-center uppercase'>he is cooking for <span className='text-amber-400'>{years_of_experience}</span> years now</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='w-11/12 mx-auto mb-16 border-amber-700 border p-5'>
                    <div className='rounded-b-lg flex flex-col mb-4 border-b-2 border-dotted border-amber-600'>
                        <div className='flex justify-between'>
                            <GiBeveledStar className='text-5xl mx-5 text-amber-500' />
                            <GiForkKnifeSpoon className='text-7xl text-amber-500' />
                            <GiBeveledStar className='text-5xl mx-5 text-amber-500' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <GiBeveledStar className='text-5xl mx-5 text-amber-500' />
                            <div className='text-3xl my-4 text'>{ } GREATEST RECIPES OF ALL TIME</div>
                            <GiBeveledStar className='text-5xl mx-5 text-amber-500' />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {
                            recipes.map(recipe => <RecipeDescription key={recipe.rating} recipe={recipe}></RecipeDescription>)
                        }
                    </div>
                </div>
            </div>



            <Footer></Footer>

        </div>
    );
};

export default ChefDetails;