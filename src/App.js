import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CafeLayout from './Layouts/CafeLayout';
import Home from './Pages/Home'
import Details from './Pages/Details';
import FilterCoffeeMachines from './Pages/FilterCoffeeMachines';
import GiftCards from './Pages/GiftCards';
import VerificationMail from './Pages/VerificationMail';

function App() {
  return (
    <>
      <BrowserRouter>
        <CafeLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<Details />} />
            <Route path='/coffee-machine?type=filtro' element={<FilterCoffeeMachines />} />
            <Route path='/giftcard' element={<GiftCards />} />
            <Route path='/verification-mail' element={<VerificationMail />} />
          </Routes>
        </CafeLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
