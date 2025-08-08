import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseMsg , setresponseMsg] = useState(null) ;
  const navigate = useNavigate() ;

  const handleSubmit = async () => {
    const data = {
      username : username ,
      password : password
    }
    const response = await fetch("http://localhost:3001/user/signup" , {
      method : "POST" ,
      headers : {
        "Content-Type": "application/json"
      } ,
      body : JSON.stringify(data) 
    })
    const responsedata = await response.json() ;
    if (responsedata){
      setUsername('') ;
      setPassword('') ;
      navigate('/login')
    }
     setresponseMsg(responsedata.message) ;
  };
return (
    <>
    
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 h-full bg-gray-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          
            <div>
              <label htmlFor="username" className="block text-sm/6 font-medium text-gray-100 text-left">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  value={username}
                  type='text'
                  required
                  onChange={(e) =>{
                    setUsername(e.target.value)
                  }}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  required
                  onChange={(e) => {
                    setPassword(e.target.value) ;
                  }}
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit} 
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold mt-4 text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          
        {responseMsg ? (
          <h1 className='text-orange-400 font-bold text-2xl flex mt-4 justify-center'>{responseMsg}</h1>
        ) : (
          <p className="mt-10 text-center text-sm/6 text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-indigo-400 hover:text-indigo-300">
              Login
            </a>
          </p>
        )}

        </div>
      </div>
      
    </>
  )
};
export default SignUp;
