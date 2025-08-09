//for testing login and sign up
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './login_ui/Login.jsx';
import SignUp from './login_ui/SignUp(no_ai_fr_fr).jsx'
import Products from './Products/Products_page.jsx'
import ProductInfo from './Products/productInfo.jsx';
import UserAccountPage from './profile_page/user_profile.jsx';
import ProductInput from './Products/productInput.jsx';
import "./index.css"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/product/:id' element={<ProductInfo/>}/>
          <Route path='/profile' element={<UserAccountPage/>}/>
          <Route path='/create' element={<ProductInput/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App
