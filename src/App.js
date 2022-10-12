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
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setCredentials } from './Features/usersSlice';
import CircularEconomy from './Pages/CircularEconomy';
import SeeAll from './Pages/SeeAll';
import ScrollToTop from './Components/ScrollToTop';
import NewLetter from './Components/NewLetter';
import Alerts from './Components/Alerts';
import AboutUs from './Pages/AboutUs';
import MyAccount from './Pages/MyAccount';
import MyOrder from './Pages/MyOrder';
import Contact from './Pages/Contact';
import EditProfile from './Pages/EditProfile';
import { reload } from './Features/reloadSlice';

function App() {
  const [loginToken] = useUserLoginTokenMutation()
  const dispatch = useDispatch()
  const reloaded = useSelector(state => state.reload.reloadState)


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
  }, [reloaded])
  
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
          <CafeLayout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/mi-cuenta/:id' element={<MyAccount />} />
              <Route path='/mi-orden/:id' element={<MyOrder />} />
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
              <Route path='/ver-todo' element={<SeeAll />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/economia-circular' element={< CircularEconomy />} />
              <Route path= '/suscriptores' element={<NewLetter />} />
              <Route path='/sobre-nosotros' element={< AboutUs />} />
              <Route path='/contacto' element={< Contact />} />
              <Route path='/editar-perfil' element={<EditProfile/>} />
              <Route path='/mi-cuenta/success/*' element={<MyAccount />} />
            </Routes>
          <Alerts/>
        </CafeLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
