import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/home/Home';
import Puff from './components/puff/Puff';
import Cart from './components/cart/Cart';
import Nap from './components/nap/Nap';
import Rain from './components/rain/Rain';
import Instagram from './components/instagram/Instagram';
import Newsletter from './components/newsletter/Newsletter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/puff" element={<Puff/>}/>
          <Route path ="/cart" element={<Cart/>}/>
          <Route path ="/nap" element={<Nap/>}/>
          <Route path ="/rain" element={<Rain/>}/>
          <Route path ="/instagram" element={<Instagram/>}/>
          <Route path ="/newsletter" element={<Newsletter/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
