import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {

  const [meals, setMeals] = useState([]);
  let [text,setText] = useState('');
  const data = useLoaderData();

  useEffect(() => {

    setMeals(data.meals);

  }, [data,meals]);

  let searchFieldRef = useRef();
  let modifyNavLink = useRef();

  let handleInputChange = () => {
   
      modifyNavLink.current.click();
      const inputValue = searchFieldRef.current.value;
      setText(inputValue);
      // searchFieldRef.current.value = '';
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
      .then(res => res.json())
      .then(data => setMeals(data.meals));
       console.log('value:', inputValue);
       modifyNavLink.current.click();

  };

  return (
    <div>

      <div className="text-center flex justify-center my-9">
        <input id='input-field' ref={searchFieldRef}
          type="text"
          className="bg-white w-2/5 h-10 outline-none px-3 font-bold text-red-600 text-2xl"
          placeholder="Search desired food..." />
        <button onClick={handleInputChange} className="p-0 px-4 rounded-none focus:outline-none border-none bg-red-500">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className='grid grid-cols-3 gap-8 my-12 mx-8'>

          {
             
             meals?.map(meal => <Meal key={meal.idMeal} meal={meal ? meal : 'meal'}></Meal>)

          }

      </div>

    <Link ref={modifyNavLink} to={`/meals/${text}`}></Link>
      
    </div>
  );
};

export default Meals;
