
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from'./Pages/Shop';
import ShopCategory from'./Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';
import mensbanner from './Components/Assets/mensbanner.jpg'
import womenbanner from './Components/Assets/womensbanner.jpg'
import kidsbanner from './Components/Assets/kidsbanner.jpg'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={mensbanner} category= "men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={womenbanner} category= "women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kidsbanner} category= "Kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
