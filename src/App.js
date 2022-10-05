import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CafeLayout from './Layouts/CafeLayout';
import Home from './Pages/Home'
import Details from './Pages/Details';
import CoffeeMachines from './Pages/CoffeeMachines';
import GiftCards from './Pages/GiftCards';
import VerificationMail from './Pages/VerificationMail';
import Coffees from './Pages/Coffees';

function App() {
  return (
    <>
      <BrowserRouter>
        <CafeLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
            <Route path='/cafes' element={<Coffees />} />
            <Route path='/maquinas-cafe/tipo' element={<CoffeeMachines />} />
            <Route path='/giftcards' element={<GiftCards />} />
            <Route path='/verification-mail' element={<VerificationMail />} />
          </Routes>
        </CafeLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
