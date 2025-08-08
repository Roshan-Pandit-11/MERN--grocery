//unfinshed code
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [responseobj , setresponseobj] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      username : username ,
      password : password
    }

    const response = await fetch('http://localhost:3001/user/login' , {
      method : "POST" ,
      headers : {
        "Content-Type": "application/json"
      } ,
      body : JSON.stringify(data) 
    })

    const responsedata = await response.json() ;
    setresponseobj(responsedata) ;
    console.log(responsedata.message) ;
    localStorage.setItem("token" , responsedata.token) ;
    if (responsedata.token){
    setUsername('');
    setPassword('');
    navigate('/')
    }
 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>
       {responseobj.token? (
        <h1 className='text-orange-400 font-bold text-2xl flex mt-4 justify-center'>{responseobj.message}</h1>
       ) : (
         <div className="w-full max-w-md mt-4 text-center">
        <span className="text-gray-600">Don't have an account? </span>
        <a
          href="/SignUp"
          className="text-blue-600 hover:underline font-medium"
        >
          Sign up
        </a>
      </div>
       )}
      </div>
      
    </div>
  );
};

export default Login;
