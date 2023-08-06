import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import ProductList from './Components/ProductList/ProductList';
import { Route, RouterProvider, Routes, createHashRouter } from 'react-router-dom';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Contacts from './Components/Contacts/Contacts';
import ProductDetails from './Components/ProductDetails/ProductDetails';


function App() {

  return <>
      <div className="App container">
    <Navbar/>
    <Routes>
      <Route path='/'element={<>
        <Slider/>
        <ProductList/>  
      </>}/>
      <Route path='products/:productId'element={<ProductDetails/>}/>

        <Route path='about'element={<About/>}/>
        <Route path='*'element={<NotFound/>}/>
        <Route path='contacts'element={<Contacts/>}/>


    </Routes>
   
    </div>
    

  </>

  ;
}

export default App;
