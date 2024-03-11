import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Authorization/Register';
import Login from './Authorization/Login';
import Home from './Components/Pages/Home';
import Booking from './Components/Pages/Booking';
import Contact from './Components/Pages/Contact';
import Ticket from './Components/Pages/Ticket';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/ticket' element={<Ticket/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  );
}

export default App;
