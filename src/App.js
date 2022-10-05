import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CafeLayout from './Layouts/CafeLayout';
import Home from './Pages/Home'
import Details from './Pages/Details';
import CoffeeMachines from './Pages/CoffeeMachines';
import GiftCards from './Pages/GiftCards';
import VerificationMail from './Pages/VerificationMail';
import LoginUser from './Pages/LoginUser';
import { useUserLoginTokenMutation } from './Features/usersAPI';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials } from './Features/usersSlice';
import NotFound from './Pages/NotFound';

function App() {
  const [loginToken] = useUserLoginTokenMutation()
  const dispatch = useDispatch()

  const loginAgain = async () => {
    try {
      let res = await loginToken(localStorage.getItem('token'))
      if(res.data.success){
        let data = res.data.response.user
        dispatch(setCredentials(data))
      }else {
        localStorage.removeItem('token')
      }
    } catch (error) {
      console.log(error) 
      localStorage.removeItem('token')
    }
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      loginAgain()
    }
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <CafeLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
            <Route path='/coffee-machine' element={<CoffeeMachines />} />
            <Route path='/giftcard' element={<GiftCards />} />
            <Route path='/verification-mail' element={<VerificationMail />} />
            <Route path='/login' element={<LoginUser />} />
            <Route path='/notfound' element={<NotFound />} />
          </Routes>
        </CafeLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
