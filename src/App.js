import './App.css';
import {Route, Routes} from 'react-router-dom'
import Loginpage from './components/login/Loginpage'
import Home from './components/home/Home'
import Details from './components/details/Details'
import Unit_news from './components/home/Unit_news';
import Ceo_connect from './components/home/Ceo_connect';


function App() {
  return (
    <>
      <Routes>
        <Route path='/loginpage' element={<Loginpage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/ceo-connect" element={<Ceo_connect />}/>
        <Route path="/unit-news" element={<Unit_news />}/>
      </Routes>
    </>
  );
}

export default App;
