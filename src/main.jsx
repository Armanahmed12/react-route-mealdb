import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home.jsx'
import Meals from './components/Meals/Meals';
import MealDetail from './components/MealDetail/MealDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    
    children: [

         {

             path : "/meals",
             element : <Meals></Meals>,
             loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Fish')

         },

         {

            path: '/meals/:mealName/:idMeal',
            element : <MealDetail></MealDetail>,
            loader : ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
           
         },

         {

             path: '/meals/:mealName',
             element : <Meals></Meals>,
             loader  : ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealName}`)
           
         }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
