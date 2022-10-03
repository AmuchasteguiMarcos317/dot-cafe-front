import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CafeLayout from './Layouts/CafeLayout';
import Home from './Pages/Home'

function App() {
  return (
    <>
      <BrowserRouter>
        <CafeLayout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </CafeLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
