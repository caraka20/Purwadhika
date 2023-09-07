import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HotelList from './Pages/HotelList';
import Admin from './Pages/Admin';
import FormInput from './Pages/FormInput';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/admin/listHotel' element={<Admin />}/>
        <Route path='/admin/inputData' element={<FormInput />}/>
        <Route path='/hotel/search' element={<HotelList />}/>
      </Routes>
    </>
  );
}

export default App;
