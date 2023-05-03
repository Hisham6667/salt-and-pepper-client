import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    // console.log(chef);
    return (
        <div>
            {chef.name}
            {
                chef.picture_url ?
                    <div className='w-96 h-52'>
                        <img className='w-100 h-full mx-auto' src={chef.picture_url} alt="" />
                    </div> :
                    <p>picture is coming</p>
            }
            <Link to={`/recipes/${chef.id}`}><button>view recipe</button></Link>
        </div>
    );
};

export default ChefCard;