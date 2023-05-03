import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
import logo from '/food.svg'

const Navigation = () => {
    return (
        <nav className='w-full bg- p-4 border-b border-t mb-5 mt-1 rounded-md border-amber-600 flex items-center justify-between'>
            <div className='flex items-center w-2/5'>
                <img className='w-16 m-0 p-0 mx-8' src={logo} alt="" />
                <p className='text-3xl'>
                    <span className='text-amber-500 font-bold'>Salt</span>
                    <span className='text-amber-900 font-bold mx-3'>&</span>
                    <span className='text-amber-500 font-bold'>Pepper</span>
                </p>
            </div>

            {/* aidiv ta 3 vag */}
            <div className='flex w-3/5 justify-between'>

                <div className='w-1/3 flex justify-center'>
                    <span className='tooltip tooltip-bottom tooltip-warning w-14' data-tip="Hisham">
                        <img className='w-full hover:cursor-pointer m-0 p-0' src={logo} alt="" />
                    </span>
                </div>

                <div className='w-1/3 flex justify-between items-center md:mr-12'>
                    <span className='hover:text-amber-500 active:text-amber-600 ease-in duration-200 font-semibold'>
                        <ActiveLink to='/'><i>Home</i></ActiveLink>
                    </span>
                    <span className='hover:text-amber-500 active:text-amber-600 ease-in duration-200 font-semibold'>
                        <ActiveLink to='/blog'><i>Blogs</i></ActiveLink>
                    </span>
                    <span className='hover:text-amber-500 active:text-amber-600 ease-in duration-200 font-semibold'>
                        <ActiveLink to='/login'><i>Login</i></ActiveLink>
                    </span>
                    <span className='hover:text-amber-500 active:text-amber-600 ease-in duration-200 font-semibold'>
                        <ActiveLink to='/register'><i>Register</i></ActiveLink>
                    </span>
                </div>

            </div>

        </nav>
    );
};

export default Navigation;