
import Cart from './Cart/Cart';
import './App.css';
import Header from './Header/Header';
import CartProvider from './Store/CartProvider';
import Teas from './Teas/Teas';
import { useState } from 'react';

function App() {
  const [cartisShown, setcartisShown] = useState(false);
  const hideCartHandler = ()=>{
    setcartisShown(false);
  }
  const showCartHandler = ()=>{
    setcartisShown(true)
   } 
   return (
    <CartProvider>
      {cartisShown &&<Cart onClose={hideCartHandler}/>}

    <Header onShowCart={showCartHandler}/>
    <Teas/>
    </CartProvider>
  );
}

export default App;
