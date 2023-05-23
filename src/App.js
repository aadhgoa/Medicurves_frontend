import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import Logout from './components/Logout';
import About from './components/About';

import {Routes,Route, Navigate} from "react-router-dom"

function App() {
  
  return (
  <>

  {/* <Navbar /> */}
    <Header />
    <Routes>
    <Route path='/' element={<Navigate to="/register" replace={true} />} />
      <Route path='/register' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
      <Route path='Logout' element={<Logout />} />
     
      <Route path='About' element={<About />} />

    </Routes>
  </>
  );
}

export default App;
