import React from 'react';
import logo from '/dish1.jpg'
import logo2 from '/dish2.jpg'
import logo3 from '/dish3.jpg'

const CookingHistory = () => {
    return (
        <div id='cookingHistory' className="w-11/12 mx-auto mb-10  p-10">

            <p className='text-center uppercase text-3xl border-y-2 mb-10 py-4 rounded-xl border-dashed border-amber-600 font-semibold font-serif'>History of the <span className='text-amber-500'>art</span> call cooking</p>

            <div className='w-full grid grid-cols-2 gap-10'>

                <div className='border shadow-lg max-h-80'>
                    <img className='h-full w-full' src={logo} alt="" />
                </div>

                <div className='border shadow-lg max-h-80 p-5'>
                    <p className='text-amber-800 text-justify'>Cooking is an essential human activity that has been around for thousands of years. The history of cooking is closely tied to the development of human civilization, as it played a crucial role in the survival and evolution of our species. The earliest evidence of cooking dates back to the discovery of fire, which allowed our ancestors to cook food, making it more digestible and safer to consume. The use of fire also allowed for the development of new cooking methods, such as roasting and baking, which opened up new possibilities for the preparation of food.</p>
                </div>

                <div className='border shadow-lg max-h-80 p-5'>
                    <p className='text-amber-800 text-justify'>As human societies developed and became more complex, so did their culinary practices. Different cultures developed their own unique cooking techniques, recipes, and traditions, often influenced by their geography, climate, and available resources. The development of trade routes also allowed for the exchange of food and cooking techniques between different regions and cultures. In ancient times, cooking was often associated with religious rituals and practices. For example, the ancient Egyptians believed that food was essential for the journey of the soul in the afterlife, and so they developed elaborate burial rituals and food offerings for the deceased.</p>
                </div>
                <div className='border shadow-lg max-h-80'>
                    <img className='h-full w-full' src={logo2} alt="" />
                </div>

                <div className='border shadow-lg max-h-80'>
                    <img className='h-full w-full' src={logo3} alt="" />
                </div>
                <div className='border shadow-lg max-h-80 p-5'>
                    <p className='text-amber-800 text-justify'>Over time, cooking became more than just a means of survival or religious practice. It became an art form, with chefs and cooks developing new and creative ways to prepare and present food. Today, cooking continues to evolve and adapt, with new ingredients, techniques, and cuisines emerging all the time. The history of cooking is a rich and complex one, reflecting the diversity and creativity of human culture.</p>
                </div>

            </div>

        </div>
    );
};

export default CookingHistory;