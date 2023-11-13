import React, { useState } from 'react'
import { Link , Navigate, useNavigate} from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error , setError] = useState(null);
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate();

  // Handle form input changes and update the formData state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      setLoading(true);


      // Assuming you want to send the formData to a server for signup
      const res = await fetch('/server/auth/signin', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        
        },
        body: JSON.stringify(formData),
      });
  
       const data = await res.json();
       console.log(data)
       if(data.sucess === false) {
      setLoading(false);
      setError(data.message);
       return;
       }
       setLoading(false)
       setError(null)
       navigate('/')
      
  } catch (error) {
    setLoading(false)
    setError(error.message)
      
    }
    

    // You may want to handle the response from the server here
};
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit}className='flex flex-col gap-4'>
        <input type='email'placeholder='email'className='border p-3 rounded-lg' id='email'onChange={handleChange}/>
        <input type='password'placeholder='password'className='border p-3 rounded-lg' id='password'onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-75 disabled:opacity-80'>{loading ? 'Loading...' : 'Sign In'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p className='font-bold'> Don't Have an account</p>
        <Link to={"/sign-up"}>
        <span className='text-blue-700'>Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500'>{error}</p>}
      </div>
  )
}
