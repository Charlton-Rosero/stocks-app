
import './App.css';
import StockList from './components/StockList';
import Home from './components/Home';
import { NavLink, Route, Routes } from "react-router-dom";
import Search from './components/Search';


function App() {
  return (
    <div className="App">
      <nav className="stocks">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/stock"}>Stock</NavLink>
        <NavLink to={"/search"}>Search</NavLink>
      </nav>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<StockList/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>


    </div>
  );
  
}

export default App;
