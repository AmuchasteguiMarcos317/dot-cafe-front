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
import AllMachine from './Pages/AllMachine'; 
import { useUserLoginTokenMutation } from './Features/usersAPI';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials } from './Features/usersSlice';
import CircularEconomy from './Pages/CircularEconomy';
import VerTodo from './Pages/VerTodo';
import ScrollToTop from './Components/ScrollToTop';
import NewLetter from './Components/NewLetter';
import Alerts from './Components/Alerts';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';

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
      <ScrollToTop />
        <CafeLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
            <Route path='/cafes' element={<Coffees />} />
            <Route path='/granel/peso' element={<CoffeeByKilo />} />
            <Route path='/maquinas-cafe/tipo' element={<CoffeeMachines />} />
            <Route path='/maquinas' element={<AllMachine />}/>
            <Route path='/filtros-sustentables' element={<Filters />} />
            <Route path='/tazas' element={<Mugs />} />
            <Route path='/giftcards' element={<GiftCards />} />
            <Route path='/verification-mail' element={<VerificationMail />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LoginUser />} />
            <Route path='/ver-todo' element={<VerTodo />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/economia-circular' element={< CircularEconomy />} />
            <Route path= '/suscriptores' element={<NewLetter />} />
            <Route path='/sobre-nosotros' element={< AboutUs />} />
            <Route path='/contacto' element={< Contact />} />
          </Routes>
          <Alerts/>
        </CafeLayout>
      </BrowserRouter>
      
    </>
  );
}

export default App;
