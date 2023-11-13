import React from 'react'
import { FaSistrix } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-red-200 shadow-md'>
     <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to = '/'>   
    <h1 className='font-bold text-sm sm:text-xl flex flext-wrap'>
    <span className='text-slate-500'>House</span>
    <span className='text-slate-700'>Drop</span>
    </h1>
    </Link> 
    <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
     <input type='text' placeholder='Search...'className='bg-transparent focus:outline-none w-24 sm:w-64'/>  
     <FaSistrix className='text-slate-600'/> 
    </form>
    <ul className='flex gap-4'>
    <Link to='/'>
    <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>  
    </Link>
    <Link to= '/About'>
    <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
    </Link>
    <Link to='/sign-in'>
    <li className=' text-slate-700 hover:underline'>Sign In</li>
    </Link>
    </ul>
     </div>   
    </header>
  )
}
