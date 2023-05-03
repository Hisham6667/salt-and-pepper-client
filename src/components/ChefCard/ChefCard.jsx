import React from 'react';
import { GiBarbedStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";

const ChefCard = ({ chef }) => {
    // console.log(chef);
    const { picture_url, name, years_of_experience, number_of_recipes, likes, specialty } = chef
    return (
        <div>
            <div className="card lg:card-side border border-amber-600 shadow-lg">
                <figure>
                    {
                        picture_url ?
                            <img className='w-56 h-full mx-auto' src={picture_url} alt="" /> :
                            <p>picture is coming</p>
                    }
                </figure>
                <div className="card-body">
                    <p className='text-center text-2xl uppercase text-amber-700 border-neutral-400 border-dashed border-t-2 border-b-2 rounded-lg mb-0'>{name}</p>
                    <p className='text-center m-0 flex items-center justify-between'>
                        <GiBarbedStar className='text-md mx-5 text-amber-500' />
                        {specialty}
                        <GiBarbedStar className='text-md mx-5 text-amber-500' />
                    </p>
                    <li className='text-stone-500 uppercase'>he is cooking for <span className='text-amber-600'>{years_of_experience}</span> years now</li>

                    <li className='text-stone-500 uppercase'>he has <span className='text-amber-600'>{number_of_recipes}</span> recipes to show off</li>

                    <li className='text-stone-500 uppercase'>his cooks made him get <span className='text-amber-600'>{likes}</span> likes</li>
                    <div className="card-actions">
                        <Link className='w-full' to={`/chef/${chef.id}`}>
                            <button className='p-3 bg-white font-semibold w-full border border-amber-700 transition-all hover:bg-amber-600 hover:text-white hover:border-slate-300 active:border-amber-700 active:text-black 
                            active:bg-white 
                            rounded-br-xl 
                            rounded-tr-xl flex justify-center items-center'>
                                VIEW RECIPES
                                <FiArrowRight className='ml-3 text-xl' />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;