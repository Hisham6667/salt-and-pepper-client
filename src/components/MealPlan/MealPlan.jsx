import React from 'react';
import logo from '/mealShop.jpg'

const MealPlan = () => {
    return (
        <div className="w-11/12 mx-auto mb-10 p-10">

            <p className='text-center uppercase text-3xl border-y-2 mb-10 py-4 rounded-xl border-dashed border-amber-600 font-semibold font-serif'>Another art of how to consume <span className='text-amber-500'>Meal</span></p>

            <div className='min-h-96 border rounded-xl  shadow-lg'>

                <img className='w-full h-80 rounded-t-xl' src={logo} alt="Shoes" />
                <div className='text-justify p-5 text-lg text-amber-900'>
                    <li>Meal planning and grocery shopping are essential parts of a healthy and efficient lifestyle. Meal planning involves creating a plan for the meals you will eat during a given period of time, while grocery shopping involves buying the food items you need to prepare those meals.</li>

                    <li>Meal planning can help you save time, money, and reduce food waste. By planning out your meals in advance, you can avoid last-minute decisions about what to eat and reduce the temptation to order takeout or eat unhealthy fast food. You can also plan meals around ingredients that are on sale or in season, which can save you money.</li>

                    <li>Grocery shopping involves making a list of the food items you need for your planned meals and purchasing those items from a grocery store or online retailer. When grocery shopping, it's important to be mindful of your budget and purchase only the items you need. Shopping for groceries in bulk or taking advantage of sales and discounts can also save you money.</li>

                    <li>To make meal planning and grocery shopping easier, you can use a variety of tools and resources. Online meal planning apps and websites can help you create a meal plan and generate a grocery list automatically. Some grocery stores also offer online ordering and delivery services, allowing you to order groceries from the comfort of your home and have them delivered directly to your door.</li>
                    
                    <li>Overall, meal planning and grocery shopping are important habits that can help you maintain a healthy and efficient lifestyle. By planning your meals in advance and shopping strategically, you can save time, money, and reduce food waste, while ensuring that you and your family eat nutritious and satisfying meals.</li>
                </div>
            </div>
        </div>
    );
};

export default MealPlan;