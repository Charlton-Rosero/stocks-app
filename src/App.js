
import './App.css';
import StockList from './components/StockList';
import Home from './components/Home';
import { NavLink, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/stock"}>Stock</NavLink>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<StockList/>} />
      </Routes>


    </div>
  );
  
}

export default App;
