import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {

  const items = useSelector((store) => store.data.items);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-lg px-4 md:px-8 lg:px-16 '>
      <div className='flex flex-col md:flex-row justify-between items-center italic py-2'>
        <div className='flex items-center mb-2 md:mb-0'>
          <img className='w-12 h-12 md:w-16 md:h-16' src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" alt="Swiggy Logo" />
          <div className='flex flex-col md:flex-row md:items-center md:ml-4'>
            <p className='text-sm md:text-base px-2'>Other</p>
            <span className='text-xs md:text-base'>Delhi, India</span>
          </div>
        </div>

        <div className='flex flex-wrap justify-center md:justify-between gap-4 text-sm md:text-base lg:text-lg'>
          <Link to={'/'}><p className='hover:text-orange-500 active:text-orange-300'>Home</p></Link>
          <Link to={'/about'}><p className='hover:text-orange-500 active:text-orange-300'>About</p></Link>
          <Link to={'/contact'}><p className='hover:text-orange-500 active:text-orange-300'>Contact Us</p></Link>
          <p>Sign In</p>
          <Link to={"/cart"}> 
            <div className='relative'>
              <FaShoppingCart className='text-[1.8rem] mt-1'/>
              <div className='flex justify-center items-center absolute -top-2 left-2 bg-orange-500 w-5 h-5 rounded-full'>
                <p className='text-sm font-semibold not-italic'>{items.length}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
