import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div id='banner' className='w-full h-96 mb-10 mt-10 transition-all flex flex-col justify-center border border-amber-700'>
            <p className='text-white text-4xl w-2/3 mx-5 mt-5 uppercase border-white border-dashed border-b-2 border-t-2 text-center py-2 rounded-lg'>Hey There! Welcome to this kitchen</p>
            <p className='text-white text-xl w-2/3 mx-5 my-5'>Foods are a vital part of our lives. They provide our bodies with the necessary nutrients, energy, and hydration to function properly. Different types of foods contain different combinations of essential nutrients such as proteins, carbohydrates, fats, vitamins, minerals, and water. These nutrients are essential for our bodies to carry out a wide range of functions including building and repairing tissues, regulating bodily functions, and producing energy.</p>
            <div className='flex w-2/5 justify-around items-center '>
                <p className='text-white text-2xl uppercase border-white border-dashed border-b-2 border-t-2 text-center py-2 rounded-lg w-72'>So want to be <span className='text-yellow-400'>CHEF</span> ?</p>
                <a href="#contact">
                    <button className='p-3 bg-white font-semibold w-48 border border-amber-700 transition-all hover:bg-amber-600 hover:text-white hover:border-slate-300 active:border-amber-700 active:text-black active:bg-white'>CONTACT US</button>
                </a>
            </div>
        </div>
    );
};

export default Banner;