import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const MealDetail = () => {
    
    const meal = useLoaderData();
    const {strMeal,strMealThumb,strArea} = meal.meals[0]; 
    const navigate = useNavigate();
    
    return (
            <div className='border-2 w-2/5 rounded-2xl relative border-red-400 border-solid mx-auto'>
        <img  className='h-[50vh] p-2 rounded-2xl w-full' src={strMealThumb} alt="" />
         <div className="meal-body">
             <h2 className='mt-8 font-bold mb-2 text-2xl'>{strMeal}</h2>
             <h5 className='text-2xl mb-12 text-green-200'>{strArea}</h5>
             <button onClick={() => navigate(-1)} className='absolute text-red-600 bottom-0 left-0 w-full p-0 bg-white hover:bg-amber-50 rounded-sm'>Go Back</button>
         </div>
        </div>
    )
};

export default MealDetail;