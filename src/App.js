import './App.css';
import {Route, Routes} from 'react-router-dom'
import Loginpage from './components/login/Loginpage'
import Home from './components/home/Home'
import Details from './components/details/Details'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Loginpage />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;
