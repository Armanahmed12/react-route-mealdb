import React from 'react';
import './Home.css';
import { Outlet, useNavigation} from 'react-router-dom';
import NavLinkStyle from '../ActiveLink/NavLinkStyle';

const Home = () => {

    const navigation = useNavigation();
   
    return (
       <header className='text-center py-8'>
             
             <h2 className='font-bold text-2xl mb-8'>This is Home</h2>
             <ul className='mb-4'>

 
               
               <li><NavLinkStyle to='/meals'>Meals</NavLinkStyle></li>
                                  
             </ul>
             <div>
                {navigation.state === 'loading' && 'Loading'}
             </div>
             <Outlet/>
            
       </header>
    );
};

export default Home;