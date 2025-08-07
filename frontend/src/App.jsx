//for testing login and sign up


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './login_ui/Login.jsx';
//import SignUP from '/SignUp.jsx';
import SignUp from './login_ui/SignUp_no_ai_fr_fr'
import Products from ./Products_page/Product.jsx
//import './App.css'

const App = () => {
  return (
    <div>
      <Login />
      <SignUp />
      <Products />
    </div>
  );
};

export default App
