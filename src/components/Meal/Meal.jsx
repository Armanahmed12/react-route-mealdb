import React from 'react';
import './Meal.css';
import { Link } from 'react-router-dom';

const Meal = ({meal}) => {
   
    const {strMeal,strMealThumb,strArea,idMeal} = meal; 
    //  console.log(meal);

    return (
        <div className='border-2 rounded-2xl relative border-red-400 border-solid'>

           <img className='h-3/5 p-2 rounded-1xl w-full' src={strMealThumb} alt="" />
            <div className="">
                <h2 className='mt-8 font-bold mb-2 text-2xl'>{strMeal}</h2>
                <h5 className='text-2xl text-green-200'>{strArea}</h5>
            </div>
            <button className='absolute bottom-0 left-0 w-full p-0 bg-white hover:bg-amber-50 rounded-sm'><Link className='font-bold w-full block py-2' to={`${idMeal}`}>See Detail</Link></button>
            
        </div>
    );
};

export default Meal;