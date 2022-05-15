import './App.css';
import Header from "./components/Header";
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Basket from "./components/Basket";
import WishList from "./components/WishList";
import SingleItem from "./components/SingleItem";


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/wishList' element={<WishList/>}/>
            <Route path='/products/products-info/:id' element={<SingleItem/>}/>
        </Routes>
    </div>
  );
}

export default App;
