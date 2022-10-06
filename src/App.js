import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CafeLayout from './Layouts/CafeLayout';
import Home from './Pages/Home'
import Details from './Pages/Details';
import CoffeeMachines from './Pages/CoffeeMachines';
import GiftCards from './Pages/GiftCards';
import VerificationMail from './Pages/VerificationMail';
import SignUp from './Pages/SignUp';
import Coffees from './Pages/Coffees';
import LoginUser from './Pages/LoginUser';
import NotFound from './Pages/NotFound';
import Mugs from './Pages/Mugs';
import Filters from './Pages/Filters';
import Cart from './Pages/Cart';
import CoffeeByKilo from './Pages/CoffeeByKilo';
import { useUserLoginTokenMutation } from './Features/usersAPI';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials } from './Features/usersSlice';

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
            <Route path='/cafes' element={<Coffees />} />
            <Route path='/granel/origen' element={<CoffeeByKilo />} />
            <Route path='/maquinas-cafe/tipo' element={<CoffeeMachines />} />
            <Route path='/filtros-sustentables' element={<Filters />} />
            <Route path='/tazas' element={<Mugs />} />
            <Route path='/giftcards' element={<GiftCards />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/verification-mail' element={<VerificationMail />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LoginUser />} />
            <Route path='/notfound' element={<NotFound />} />
          </Routes>
        </CafeLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
